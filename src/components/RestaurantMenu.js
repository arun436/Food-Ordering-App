import Shimmer from "../components/Shimmer";
import { useParams, useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [categories, setCategories] = useState([]);
  const { resId } = useParams();

  const [resInfo, categories] = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  // debugger;
  // setCategories(itemCards);
  // console.log(categories);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </h3>
      {/* Categories Accoridian */}
      <div>
        {categories?.map((category, index) => {
          // console.log(category?.card?.card);
          // if(category?.card?.card?.itemCards?)
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={(ind = index) => {
                setShowIndex(ind);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
