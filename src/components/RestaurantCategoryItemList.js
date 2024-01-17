import React from 'react';
import { FaCircle, FaStar } from 'react-icons/fa';
import { CDN_LINK } from "../utils/constent";


const RestaurantCategoryItemList = ({items}) => {

  return (
    <div>
      <div className="flex justify-center flex-wrap  ">
        <div>
          {
            items.map((item) => (
              <div
                className="flex cursor-pointer justify-between border-b border-slate-200 py-10"
                key={item.card.info.id}
              >
                <div className="left">
                  <div className="flex pb-1">
                    <p className="mr-2">
                      {item.card.info.isVeg ? (
                        <FaCircle className="text-green-700 text-base p-0.5 border-2 rounded-sm border-green-700" />
                      ) : (
                        <FaCircle className=" text-base border-2 p-0.5 border-red-700 rounded-sm text-red-700" />
                      )}
                    </p>
                    <p className="flex text-xs text-orange-400 font-semibold">
                      {item.card.info.isBestseller && (
                        <>
                          <FaStar className="mt-0.5 mr-1" /> Bestseller
                        </>
                      )}
                    </p>
                  </div>

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
                    className="min-w-32 max-w-32 h-24 rounded-xl object-cover"
                    src={CDN_LINK + item.card.info.imageId}
                  />
                  <button className=" absolute  text-xs px-8 py-1 rounded-md font-semibold text-green-700  border-2  transform -translate-y-1/2 translate-x-5  bg-white ">
                    Add
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantCategoryItemList;
