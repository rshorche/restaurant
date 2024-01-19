import React from "react";
import { Link } from "react-router-dom";

export default function Section7() {
  return (
    <div className="my-20 md:my-40">
      <div className="bg-sec-7 max-w-6xl mx-auto rounded-[20%] text-white text-xs md:text-lg text-center  pt-2 md:pt-5">
        <h3 className="text-4xl md:text-7xl font-bold ">we are open from</h3>
        <h4 className="text-base md:text-4xl font-bold mt-5">Monday-Sunday</h4>
        <p className="mt-1">Launch : Mon-Sun : 11:00am-02:00pm</p>
        <p>Dinner : sunday : 04:00pm-08:00pm</p>
        <p>04:00pm-09:00pm</p>
        <div className="font-bold child:w-32 child:h-10 child:md:w-56 child:md:h-16 child:rounded-full child:text-sm child:md:text-xl pb-6 md:pb-12 my-10 md:my-20  flex flex-wrap gap-4 justify-center ">
          <button className=" bg-orange-500 ">
            <Link to="orderonline">Order now</Link>
          </button>
          <button className=" bg-white text-orange-950  ">
            <Link to="reservation">Reservation</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
