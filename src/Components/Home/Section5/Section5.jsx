import React, { useState } from "react";

export default function Section5() {
  const [chefs, setChefs] = useState([]);

  useState(() => {
    getAllChef();
  }, []);

  async function getAllChef() {
    await fetch("https://rshorche.github.io/restaurant-json/db.json")
      .then((res) => res.json())
      .then((chefs) => setChefs(chefs.chef));
  }

  return (
    <div className="w-11/12 mx-auto text-center">
      {/* title */}
      <h3 className="font-bold text-3xl md:text-7xl text-orange-950">
        Our greatest chef
      </h3>
      {/* cards */}
      <div className="flex flex-wrap gap-4 items-center justify-center my-10 md:my-28">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="w-36 md:w-80 rounded-3xl text-sm md:text-2xl">
            {/* img */}
            <img src={`${chef.img}`} alt={`${chef.name}`} />
            {/* title */}
            <h4 className="font-bold text-zinc-700 my-7">{chef.name}</h4>
            {/* role */}
            <span className="text-gray-600">{chef.role}</span>
          </div>
        ))}
      </div>
      {/* btn */}
      <button className="hidden md:inline-block w-32 h-11 md:w-56 md:h-16 my-10 md:my-20 bg-orange-500 text-white text-sm md:text-xl rounded-full">
        View all
      </button>
    </div>
  );
}
