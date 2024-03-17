import RestaurantCard, { WithLabelPromoted } from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CORS_URL, RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = WithLabelPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const mapListsWithData = (cards) => {
    cards?.map((card) => {
      if (card?.card?.card?.id?.includes("restaurant_grid_listing")) {
        // console.log(card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setListOfRestaurants(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      } else {
        // console.log(console.log("outside" + card?.card?.card));
      }
    });
  };

  const fetchData = async () => {
    // const URI_COMPONENT = CORS_URL + encodeURIComponent(RESTAURANT_LIST_API);
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    mapListsWithData(json?.data?.cards);
  };
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }
  if (ListOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  // console.log(filteredRestaurants);
  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black p-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-slate-700 text-white m-4 rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // Search Text
              const filteredRes = ListOfRestaurants.filter((res) => {
                // console.log(res.info.name.includes(searchText), res.info.name);
                return res.info.name.includes(searchText);
              });
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-slate-700 text-white rounded-lg">
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            className="link"
            key={restaurant?.info?.id}
          >
            {restaurant?.info?.veg ? (
              <RestaurantCardPromoted resName={restaurant} />
            ) : (
              <RestaurantCard resName={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
