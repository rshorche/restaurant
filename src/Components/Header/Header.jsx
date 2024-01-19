import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getAllMenu();
  }, []);

  function getAllMenu() {
    fetch("https://rshorche.github.io/restaurant-json/db.json")
      .then((res) => res.json())
      .then((menu) => setMenus(menu.navbar));
  }

  return (
    <>
      {/* pc menu */}
      <div className="fixed bg-white z-10 top-0 right-0 left-0 py-3 text-sm mx-auto hidden md:flex">
        {/* main container */}
        <div className="w-11/12 h-14 flex items-center justify-between mx-auto">
          {/* logo */}
          <div className="font-bold flex items-center md:cursor-pointer">
            {/* D */}
            <p className="bg-orange-500 text-white w-12 h-12 rounded-full text-center text-2xl leading-10	">
              D
            </p>
            {/*Delizi & oso  */}
            <span className="text-zinc-700 pl-4 ">
              Delizi<span className="text-orange-500">oso</span>
            </span>
          </div>
          {/* menu */}
          <ul className="text-zinc-700 flex md:gap-2 lg:gap-10">
            {menus.map((menu) => (
              <li className="md:cursor-pointer" key={menu.id}>
                <NavLink
                  to={menu.path}
                  className={(menu) =>
                    menu.isActive ? "text-orange-500" : ""
                  }>
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* cart & login btn */}
          <div className="flex">
            {/* cart */}
            <div className="relative w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center md:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-zinc-700">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p className="absolute top-0 right-0 bg-orange-500 text-white w-4 h-4 text-xs text-center leading-[0.9rem] rounded-full">
                3
              </p>
            </div>

            {/* login btn */}
            <button className="text-white bg-green-500 w-28 h-12 rounded-3xl ml-4">
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="bg-white mt-3 text-sm mx-auto md:hidden ">
        {/* main container */}
        <div className="w-11/12 h-14 flex items-center justify-between mx-auto">
          {/* logo */}

          <div className="font-bold flex items-center">
            {/* D */}
            <p className="bg-orange-500 text-white w-12 h-12 rounded-full text-center text-2xl leading-10	">
              D
            </p>
            {/*Delizi & oso  */}
            <span className="text-zinc-700 pl-4 ">
              Delizi<span className="text-orange-500">oso</span>
            </span>
          </div>
          {/*logo & close icon & menu & login btn*/}
          <div
            className={`bg-white absolute top-0 bottom-0 w-1/2 transition-all shadow-sm z-50 ${
              toggle ? "-left-96" : "left-0"
            }`}>
            {/* logo & close icon */}
            <div className="flex items-center justify-between p-2">
              {/* logo */}
              <div className="font-bold flex items-center">
                {/* D */}
                <p className="bg-orange-500 text-white w-8 h-8 rounded-full text-center text-lg leading-8 ">
                  D
                </p>
                {/*Delizi & oso  */}
                <span className="text-zinc-700 pl-1">
                  Delizi<span className="text-orange-500">oso</span>
                </span>
              </div>
              {/* close icon */}
              <div onClick={() => setToggle(!toggle)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {/* menu */}
            <ul className="text-zinc-700 p-4 mt-4 child:mb-4 transition-all">
              {menus.map((menu) => (
                <li className="md:cursor-pointer" key={menu.id}>
                  <NavLink
                    to={menu.path}
                    className={(menu) =>
                      menu.isActive ? "text-orange-500" : ""
                    }>
                    {menu.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* login btn */}
            <div>
              <button className="text-white bg-green-500 w-20 h-10 rounded-3xl ml-4">
                Log in
              </button>
            </div>
          </div>
          {/* overlay */}
          <div
            onClick={() => setToggle(!toggle)}
            className={`absolute top-0 bottom-0 right-0 z-10 w-3/4 h-full bg-black opacity-30	${
              toggle ? "hidden" : "flex"
            }`}></div>
          {/* cart & open icon */}
          <div className="flex items-center gap-4">
            {/* cart */}
            <div className="relative w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-zinc-700">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p className="absolute top-0 right-0 bg-orange-500 text-white w-4 h-4 text-xs text-center leading-[0.9rem] rounded-full">
                3
              </p>
            </div>
            {/* open icon */}
            <div onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
