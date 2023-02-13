import React from "react";
import Laptop from "./../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-20">
        <img className="max-w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quod
            ex voluptatum consectetur aliquid omnis optio dolorum consequuntur
            eum eaque, obcaecati odit sapiente nulla. Necessitatibus deserunt
            expedita modi! In, enim?
          </p>
          <button className="bg-black py-3  rounded-md mt-4 text-[#00df9a] w-[200px] mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
