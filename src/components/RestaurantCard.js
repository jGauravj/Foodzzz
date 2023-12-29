import { CDN_LINK } from "../utils/constent";


const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="food-img"
        src={
          CDN_LINK +
          cloudinaryImageId
        }
      />

      <div className="card-contant">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{costForTwo}</p>
        <p>{deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;