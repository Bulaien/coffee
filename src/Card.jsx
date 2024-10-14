import React from "react";
import Star from "./Star.svg";
import Star_fill from "./Star_fill.svg";

function Card({ id, name, price, image, popular, available, rating, votes }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="relative">
        <img className=" rounded-lg" src={image} alt="" />

        {popular && (
          <p className="absolute bg-[#F6C768] px-2 top-2 left-2 text-xs rounded-md">
            Popular
          </p>
        )}
      </div>

      <div className="flex w-3/4 justify-between mt-3">
        <p className="font-bold text-white">{name}</p>

        <p className="bg-[#BEE3CC] px-2 flex items-center text-xs font-bold rounded-md">
          {price}
        </p>
      </div>
      <div className="flex text-left justify-between w-3/4">
        <div className="flex ">
          <img src={votes ? { Star_fill } : { Star }} alt="" />
          <p className="text-white text-bold">{rating}</p>
          <p className="text-gray-300">
            {" "}
            {votes ? "(" + votes + " votes)" : "No ratings"}
          </p>
        </div>
        <p className="text-red-400">{!available ? "Sold out" : ""}</p>
      </div>
    </div>
  );
}

export default Card;
