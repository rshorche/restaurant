import React from "react";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <>
      {/* section1 */}
      <div className="w-11/12 mx-auto mt-28 md:mt-56 flex flex-wrap justify-center gap-4">
        {/* span & title & desc & btns */}
        <div className="text-xs md:text-lg">
          {/* span */}
          <span className="text-orange-500 bg-orange-200  px-5 py-2 md:px-8 md:py-2 rounded-full ">
            Restauran
          </span>
          {/* title */}
          <h3 className="max-w-[12rem] md:max-w-[18rem] mt-4 md:mt-7 text-6xl md:text-7xl font-bold text-orange-950">
            Italian Cuisine
          </h3>
          {/* desc */}
          <p className="max-w-xs md:max-w-lg mt-4 md:mt-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </p>
          {/* btns */}
          <div className="mt-10 md:mt-20 text-white flex gap-4 flex-wrap">
            <button className="w-32 h-11 md:w-56 md:h-16 bg-orange-500 rounded-full ">
              <Link to="orderonline">Order now</Link>
            </button>
            <button className="w-32 h-11 md:w-56 md:h-16 bg-green-500 rounded-full">
              <Link to="reservation">Reservation</Link>
            </button>
          </div>
        </div>
        {/* img */}
        <div>
          <img
            className="w-[43rem]"
            src="images/sections/section1.png"
            alt="section1"
          />
        </div>
      </div>
    </>
  );
}
