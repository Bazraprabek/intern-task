import React from "react";
import { MapPin, Star } from "@phosphor-icons/react";
import Button from "./Button";

const Card = ({ imagePath, title, description }) => {
  return (
    <div className="max-w-sm shadow-md overflow-hidden hover:scale-105 transform transition">
      <img src={imagePath} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4 bg-gray-100">
        <div className="flex items-center mb-2">
          <MapPin size={24} className="text-blue-500 mr-2" />
          <h2 className="font-semibold text-lg">{title}</h2>
        </div>
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <div className="rating flex items-center">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
          <Button className="text-sm">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
