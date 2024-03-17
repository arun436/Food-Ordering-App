import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resName?.info;

  // console.log(resName.info)
  return (
    <div className="m-4 p-4 w-[250px] flex flex-col justify-evenly hover:shadow-xl">
      <div>
        <img
          className="rounded-lg h-44 w-56"
          src={CON_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <div className="font-bold py-2 text-lg">
        <span>{name}</span>
      </div>
      <div>
        <span>{avgRating} Stars</span>
      </div>
      <div>
        <span>{cuisines.join(" , ")}</span>
      </div>
      <div>
        <span>{costForTwo}</span>
      </div>
      <div>
        <span>{sla?.slaString}</span>
      </div>
    </div>
  );
};

export const WithLabelPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-slate-700 text-white m-2 px-2 py-1 rounded-lg">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
