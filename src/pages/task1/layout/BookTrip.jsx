import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const BookTrip = () => {
  return (
    <div className="flex justify-center">
      <form className="border rounded-sm drop-shadow-sm mx-auto p-6 ">
        <div className="flex flex-col mb-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-4">
              Where to Travel?
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nepal"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-4">
              No. of visitor
            </label>
            <input
              type="number"
              name="visitor"
              id="visitor"
              placeholder="2"
              className="p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-4">
              Arrivals
            </label>
            <input
              type="date"
              name="arrivals"
              id="arrivals"
              className="p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-4">
              No. of visitor
            </label>
            <input
              type="date"
              name="arrivals"
              id="arrivals"
              className="p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
        </div>
        <Button className="text-left">Book Now</Button>
      </form>
      <div className="image-wrapper">
        <img
          className="w-full h-[550px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/1cd6/d984/77c4d514335d350900cf23dbff7e0efb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHwSjaGHnxsJzV3nMubFbHQt88oGFq2p2rUGOVgefEfiQOCtSslarpAl09n3I10qaH3vSqvXZyjW7WE5Q0-b1Oc0BeACdTGGbOykiKfL2WJiqzaZO7FfDBizMkeB8UXVpUGemN6MxWWAcKXqK~SzzGYqhz6n5tyjwCStLP0PJrS-EhR-iAyrJS~9mZ7h~s7I7Dmv5r8WryaOeaBCBWohgdNMxdpSgztrHPnPXUgnGChJmyCzURS2fYH0jGLBPesmeAPbUTk~ireJnyAA~A6tcLJzeZHoE49nbBxRl6UEcxpSSvvb3mceWrGGxoae2CgK4NhG16aspVZyqq2DV4Pbuw__"
          alt=""
        />
      </div>
    </div>
  );
};

export default BookTrip;
