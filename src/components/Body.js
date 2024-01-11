import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import errorImg from "../../assets/errorImg2.png";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredReastaurant, SetFilteredRestaurant] = useState([]);

  const [searchText, SetSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9168781&lng=75.734032&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);

      setListOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      SetFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="grid mt-20 place-items-center">
        <div className="w-1/3 rounded-3xl bg-violet-100 p-9 ">
          <h1 className="text-center pb-4 text-gray-700 text-xl font-semibold">
            Oops!
          </h1>
          <div className="flex justify-center">
            <img className="w-40" src={errorImg} alt="error img" />
          </div>
          <h1 className="text-center text-base font-semibold pt-3 text-gray-700">
            Looks like you are offile
          </h1>
          <p className="text-center text-base font-semibold text-gray-700">
            check your internet..
          </p>
          <div className="text-center font-semibold pt-4 underline text-gray-900 hover:text-orange-400 cursor-pointer block">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="flex justify-center pt-6 pb-6">
        <div className="w-2/4">
          <input
            type="text"
            className="w-9/12 p-2 border-2  border-slate-200 rounded-xl placeholder-slate-400 focus:border-slate-500 text-sm focus:outline-none"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
              if (!e.target.value) {
                SetFilteredRestaurant(listOfRestaurant);
              }
            }}
          />
          <button
            className="px-3 ml-3 p-2 rounded-xl border-2 border-slate-200 hover:border-slate-500 text-sm text-slate-700 font-medium"
            onClick={() => {
              const filterdResList = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              SetFilteredRestaurant(filterdResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="p-2 px-3 rounded-xl text-center border-2 hover:bg-violet-300 text-sm font-semibold text-gray-600 hover:border-violet-300"
          onClick={() => {
            const filterdList = filteredReastaurant.filter(
              (res) => res.info.avgRatingString > 4
            );
            SetFilteredRestaurant(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-x-9 gap-y-5 ">
          {filteredReastaurant.map((restaurant) => (
            <Link
              className="costom-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
