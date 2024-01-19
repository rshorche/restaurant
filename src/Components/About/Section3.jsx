import React from "react";

export default function Section3() {
  return (
    <div className="my-10 flex justify-center">
      <div className="flex justify-center items-center gap-8 flex-wrap w-11/12">
        <h3 className="max-w-[13rem] md:max-w-lg font-bold text-3xl md:text-7xl text-orange-500 flex md:hidden ">
          <span className="text-orange-950">Owner</span> & Executive Chef
        </h3>
        <div>
          <img
            className="max-w-full md:max-w-md "
            src="images/about/section3.png"
            alt="section3"
          />
        </div>
        <div>
          <h3 className="max-w-[13rem] md:max-w-lg font-bold text-3xl md:text-7xl text-orange-950 hidden md:inline-block ">
            <span className="text-orange-500">Owner</span>& Executive Chef
          </h3>
          <h4 className="text-sm md:text-3xl text-zinc-800 font-bold mt-5 md:mt-10">
            Ismail Marzuki
          </h4>
          <p className="max-w-xs md:max-w-md text-gray-500 text-xs md:text-xl mt-12 md:mt-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
