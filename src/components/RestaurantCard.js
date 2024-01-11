import { CDN_LINK } from "../utils/constent";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card w-auto max-w-64 ease-in-out duration-300 hover:scale-95">
      <img
        className="food-img w-full h-[169.23] rounded-2xl"
        src={CDN_LINK + cloudinaryImageId}
      />

      <div className="card-contant pt-3 pl-3 pr-1 truncate">
        <h3 className="res-title overflow-hidden truncate text-lg  font-semibold text-gray-700">
          {name}
        </h3>
        <div className="flex">
          <FaStar className="mt-1 text-base text-orange-400" />
          <p className="text-sm ml-1 font-semibold text-gray-700">
            {avgRating}
          </p>
          <p className="text-sm ml-2 font-semibold text-gray-700">
            {deliveryTime} mins
          </p>
        </div>
        <p className="text-gray-700 text-sm truncate">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
