import React from "react";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <div className="my-16 md:my-24">
      <div className="flex items-center py-10 md:py-16 flex-wrap-reverse justify-around gap-5 bg-orange-50">
        {/* img */}
        <div>
          <img
            className="w-auto md:max-w-[36rem]"
            src="images/sections/section4.png"
            alt="section4"
          />
        </div>
        {/* title & desc & btn */}
        <div className="p-2">
          {/* title */}
          <h3 className="text-orange-950 w-48 md:w-[28rem] font-bold text-3xl md:text-7xl">
            Let's reserve <span className="text-orange-500">a table</span>
          </h3>
          {/* desc */}
          <p className="max-w-xs md:max-w-[26rem] text-xs md:text-xl text-gray-600 mt-10 md:mt-12">
            pLorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          {/* btn */}
          <button className="w-32 h-11 md:w-56 md:h-16 mt-8 md:mt-32 bg-orange-500 text-white text-sm md:text-xl rounded-full">
            <Link to="reservation">Reservation</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
