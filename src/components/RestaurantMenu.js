import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FaStar, FaCircle } from "react-icons/fa";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    locality,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <div className="flex justify-between w-1/2  mt-10 border-b-2 border-dashed pb-4">
          <div className="left">
            <h1 className="text-2xl font-bold text-gray-700">{name}</h1>
            <p className="text-sm pt-1 text-slate-700">{cuisines.join(", ")}</p>
            <p className="text-sm text-slate-700">{costForTwoMessage}</p>
            <p className="text-sm text-slate-700">{locality}</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="border-2 py-2 px-1 rounded-xl">
              <div className="flex justify-center pb-2">
                <FaStar className="  text-center align-middle mt-0.5 text-green-700 font-semibold" />
                <p className="pt-0 mt-0 pl-0.5 text-green-700 text-sm font-semibold ">
                  {avgRating}
                </p>
              </div>
              <p className="text-xs font-semibold text-gray-500">
                {totalRatingsString}
              </p>
            </div>
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
