// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FaStar } from "react-icons/fa";
import { CDN_LINK } from "../utils/constent";
// import { MENU_API } from "../utils/constent";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   console.log(json);

  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    locality,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  console.log(resInfo?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)

  return (
    <div className="">
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

      <div className="flex justify-center flex-wrap mt-10 ">
        <div className="w-1/2">
          {itemCards &&
            itemCards.length > 0 &&
            itemCards.map((item) => (
              <div
                className="flex justify-between border-b-2 border-slate-200 py-6"
                key={item.card.info.id}
              >
                <div className="left">
                  <h1 className="text-lg font-semibold text-slate-700">
                    {item.card.info.name}
                  </h1>
                  <p className="text-sm text-slate-700">
                    {"Rs. "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}{" "}
                  </p>
                  <p className="text-sm pt-4 text-slate-700">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="right pl-8">
                  <img
                    className="min-w-32 max-w-32 h-20 rounded-xl object-cover"
                    src={CDN_LINK + item.card.info.imageId}
                  />
                  <button className=" absolute  text-xs px-6 py-1 rounded-lg font-semibold text-green-700  border-2  transform -translate-y-1/2 translate-x-6  bg-white ">Add</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
