import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  }

  return (
    <div>
      <div className="mx-auto w-1/2 border-b-8 p-2 py-4 mb-2 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg flex items-center font-bold text-gray-700">
            {data.title} ({data.title.length})
          </span>
          <span className="flex items-center text-lg">
            <FaAngleDown />
          </span>
        </div>
        <div className="flex justify-center">
          { showItem && <RestaurantCategoryItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
