import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white text-center mt-[-96px] h-screen w-full flex justify-center items-center flex-col max-w-[800px] mx-auto">
      <p className="text-[#00df9a] font-bold p-2">
        GROWING WITH DATA ANALYTICS
      </p>
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Grow with data.
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4 ">
          Fast, flexible financing for
        </p>
        <Typed
          className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 md:pl-4"
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className="text-gray-400 text-xl md:text-2xl font-bold">
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS
        platforms.
      </p>
      <button className=" bg-[#00df9a] py-2 px-16 rounded-md mt-2 text-black">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
