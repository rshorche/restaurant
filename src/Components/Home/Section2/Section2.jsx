import React from "react";
import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <>
      {/* section2 */}
      <div className="w-full bg-green-50">
        <div className="w-11/12 mx-auto pt-28 flex flex-wrap-reverse justify-center items-center text-xs md:text-xl">
          {/* img */}
          <div>
            <img
              className="w-[43rem] "
              src="images/sections/section2.png"
              alt="section2"
            />
          </div>
          {/* title & desc & btn */}
          <div>
            {/* title */}
            <h3 className="max-w-[13rem] md:max-w-[26rem] text-4xl md:text-7xl font-bold text-orange-950">
              Welcome to <span className="text-orange-500">delizioso</span>
            </h3>
            {/* desc */}
            <p className="max-w-[18rem] md:max-w-[27rem] mt-5 md:mt-14 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
              nec quam
            </p>
            {/* btn */}
            <button className="w-32 h-11 md:w-56 md:h-16 bg-orange-500 rounded-full text-white mt-12 md:mt-28">
              <Link to="menu">See our menu</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
