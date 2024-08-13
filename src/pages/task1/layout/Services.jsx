import { Martini } from "@phosphor-icons/react";
import React from "react";
import { services } from "../utils/helper";

const Services = () => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {services.map((value, index) => (
        <div className="flex flex-col items-center text-center" key={index}>
          <Martini className="mb-2 text-blue-500" size={32} />
          <h1 className="font-semibold my-3">{value.title}</h1>
          <p className="text-justify">{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
