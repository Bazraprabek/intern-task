import { Star } from "@phosphor-icons/react";
import React from "react";
import { reviews } from "../utils/helper";

const Review = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {reviews.map((value, index) => (
        <div className="max-w-sm border overflow-hidden text-center px-6 py-4">
          <div className="flex justify-center">
            <img
              src={value.image}
              className="rounded-full text-center"
              alt=""
            />
          </div>
          <h1 className="font-semibold mt-4">{value.name}</h1>
          <p>{value.description}</p>
          <div className="rating flex justify-center mt-4">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
