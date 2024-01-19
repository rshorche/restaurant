import React from "react";

export default function Section6() {
  return (
    <div className="bg-sec-6 text-center flex items-center justify-center flex-col">
      <h4 className="text-3xl md:text-7xl font-bold text-orange-950">
        Our customers say
      </h4>
      <div>
        <img
          src="images/sections/section62.png"
          alt="section62"
          className="mx-auto mt-12 w-28 md:w-60"
        />
        <h4 className="text-base md:text-3xl font-bold text-zinc-700 mt-4 md:mt-10 mb-2">
          Starla Virgoun
        </h4>
        <span className="text-gray-700 text-xs md:text-lg">
          Financial advisor
        </span>
        <p className="max-w-xs md:max-w-lg text-xs md:text-lg text-gray-700 mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </p>
      </div>
      <img
        src="images/sections/section61.png"
        alt="section61"
        className="mt-0 md:-mt-10 p-2 md:p-10"
      />
    </div>
  );
}
