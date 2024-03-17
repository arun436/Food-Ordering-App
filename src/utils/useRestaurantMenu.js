import { useState, useEffect } from "react";
import {
  CORS_URL,
  RESTAURANT_MENU_ID_1,
  RESTAURANT_MENU_ID_2,
} from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const returnItemCards = (outerCards) => {
    // console.log(outerCards);
    const categories = outerCards?.filter((card) =>
      card?.card?.card?.["@type"].includes(".ItemCategory")
    );
    setItemCards(categories);
    // console.log(categories);
  };

  const fetchMenu = async () => {
    // const URL =
    //   CORS_URL +
    //   encodeURIComponent(RESTAURANT_MENU_ID_1 + resId + RESTAURANT_MENU_ID_2);
    const data = await fetch(
      RESTAURANT_MENU_ID_1 + resId + RESTAURANT_MENU_ID_2
    );
    const json = await data.json();
    setResInfo(json.data);
    returnItemCards(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  // debugger;
  if (resInfo === null) {
  }
  return [resInfo, itemCards];
};

export default useRestaurantMenu;
