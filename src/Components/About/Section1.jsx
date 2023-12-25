import React from "react";

export default function Section1() {
  return (
    <div className="mt-40 flex justify-center">
      <div className="flex justify-center items-center gap-8 flex-wrap w-11/12">
        <h3 className="block md:hidden font-bold text-3xl text-orange-950">
          <span className="text-orange-500">Our</span> restautant
        </h3>
        <div>
          <img
            className="max-w-full md:max-w-xl "
            src="images/about/section1.png"
            alt="section1"
          />
        </div>
        <div className="">
          <h3 className="font-bold text-3xl md:text-7xl text-orange-950 hidden md:flex ">
            <span className="text-orange-500">Our</span> restautant
          </h3>
          <p className="max-w-xs md:max-w-md text-gray-500 text-xs md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>
    </div>
  );
}
