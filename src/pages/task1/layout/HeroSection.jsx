import React from "react";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen py-8 px-4 text-center flex flex-col justify-center items-center relative"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/5fc8/41ce/08e386b87eda6f96d8fb92dd438b0135?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCMxalam7c-ouwkO238XiV1vWo4a4xIxhDvVtSbovJUKEtMs9yclx9N8s2nMFii55DXWQOb6rADk6-r7cVk--h~4udhnoQluBrnvtrSI876G-u~QzTML1bT5x~6SEK6COycZ3aHsosGNUxYI6BY~qZvkniaOUyJae2rytgHrc3UhVD8SI8c8OYGOf3DnKP3HzfycFmgApNZEV4UPeHLIr9GhrXZQtMQY-bPO67g~MByyZACTyZvc6gB-Y4XahVk1JOukJowAGBL6EWwlbcSwg-Px4qY0gkNiKW7fW7cIIFkfRiJ9nEieyIJfixaSXpKbctKi5TgSzv4VTukAgRyKiQ__')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10">
        <h1 className="title flex flex-col text-white text-2xl md:text-4xl mb-4">
          <span>
            Plan your trip with{" "}
            <span className="text-[#248DEE]">
              <span className="text-[#9B5237]">Go</span>Explore
            </span>
          </span>
          <span>&</span>
          <span>Discover the world</span>
        </h1>
        <p className="text-white text-sm md:text-md mb-16">
          Discover new adventures and make memories that last a lifetime.
        </p>
        <div className="button">
          <a
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            href="#popular"
          >
            EXPLORE NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
