import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handleClick = () => {
    // console.log(showItems);
    if (showItems === true) {
      setShowIndex(null);
    } else {
      setShowIndex();
    }
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
