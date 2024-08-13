import React from "react";
import Card from "../components/Card";
import { popular } from "../utils/helper";

const MostPopularDestination = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {popular.map((value, index) => (
        <Card
          key={index}
          imagePath={value.imagePath}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default MostPopularDestination;
