import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <input
              className="max-w-[600px] w-full rounded-md text-black px-4 py-2"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] px-3 py-2 rounded-md my-6 ml-2 text-black font-bold w-[200px]">
              Notify Me
            </button>
          </div>
          <p>We care bout the protection of your data. Read our</p>
          <a className="text-[#00df9a] " href="#">
            Privacy Policy.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
