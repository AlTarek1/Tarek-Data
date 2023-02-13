import React from "react";

const Card = (props) => {
  return (
    <div
      className={`border shadow-xl flex flex-col p-4  rounded-lg items-center justify-center hover:scale-105 duration-300 ${
        props.isSpecial ? "my-8 md:my-0" : "my-4"
      }`}
    >
      <img
        className="w-20 mx-auto bg-white mt-[-3rem]"
        src={props.img}
        alt=""
      />
      <h2 className="font-bold text-2xl text-center py-8">{props.heading}</h2>
      <p className="font-bold text-4xl">{props.price}$</p>
      <div className="mt-8">
        <p className=" py-2 border-b">{props.feat1}</p>
        <p className=" py-2 border-b">{props.feat2}</p>
        <p className=" py-2 border-b">{props.feat3}</p>
      </div>
      <button
        className={` rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 ${
          props.isSpecial
            ? "bg-black text-[#00df9a]"
            : "bg-[#00df9a] text-black"
        }`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
