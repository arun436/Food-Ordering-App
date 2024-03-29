import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const items = props?.items;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    // console.log(item);
    dispatch(addItem(item));
  };
  //   console.log(items);
  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            data-testid="food-items"
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 bg-slate-600 text-white shadow-lg mx-11 rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CON_URL + item?.card?.info?.imageId}
                className="w-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
