import React, { useEffect, useState } from "react";

export default function Main() {
  const [menus, setMenus] = useState([]);
  const [allMenus, setAllMenus] = useState([]);
  const [catagory, setCategory] = useState([]);
  const [selectCat, setSelectCatt] = useState();

  useEffect(() => {
    getAllCategory();
    getAllMenus();
  }, []);

  useEffect(() => {
    addMenu();
  }, [menus]);

  useEffect(() => {
    filterMenu();
  }, [selectCat]);

  async function getAllMenus() {
    await fetch("https://rshorche.github.io/restaurant-json/db.json")
      .then((res) => res.json())
      .then((res) => setMenus(res.menus));
  }
  function getAllCategory() {
    fetch("https://rshorche.github.io/restaurant-json/db.json")
      .then((res) => res.json())
      .then((menu) => setCategory(menu.menusCategory));
  }
  function showStar(stars) {
    const imgaes = ["images/other/star1.png", "images/other/star2.png"];
    const allStars = [];

    for (let i = 0; i < 5; i++) {
      if (i < Number(stars)) {
        allStars.push(imgaes[0]);
      } else {
        allStars.push(imgaes[1]);
      }
    }
    return allStars.map((star) => (
      <img key={Math.random() * 1000} src={`${star}`} alt="star" />
    ));
  }
  function filterMenu() {
    let allProduct = [];
    menus.map((menu) => {
      if (menu.catagory === selectCat) {
        allProduct.push(menu);
      }
    });
    if (selectCat === "All catagory") {
      return setAllMenus(menus);
    }
    setAllMenus(allProduct);
  }
  function addMenu() {
    setAllMenus(menus);
  }
  return (
    <>
      <div className="text-center">
        {/* title */}
        <h4 className="text-orange-950 text-4xl md:text-7xl font-bold	my-20">
          Our popular menu
        </h4>
        {/* menu */}
        <div className="flex flex-wrap gap-4 my-14 justify-center text-xs md:text-xl child:md:cursor-pointer child:bg-gray-50 child:rounded-full child:px-6 child:py-3 child:md:px-10 child:md:py-4">
          {catagory.map((menu) => (
            <span
              className={`${
                menu.selected === "true" ? "text-white !bg-orange-950" : ""
              }`}
              onClick={() => setSelectCatt(menu.title)}
              key={menu.id}>
              {menu.title}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-2 md:gap-4 text-center">
        {/* cards */}
        {allMenus.map((menu) => (
          <div
            key={menu.id}
            className="w-36 md:w-80 bg-gray-100 rounded-3xl md:rounded-[3rem] p-2 ">
            {/* img */}
            <img src={`${menu.img}`} alt={`${menu.title}`} />
            {/* title */}
            <h4 className="font-bold text-sm md:text-3xl text-zinc-700">
              {menu.title}
            </h4>
            {/* stars */}
            <div className="flex justify-center gap-1 my-3">
              {showStar(menu.stars)}
            </div>
            {/* desc */}
            <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
              {menu.desc}
            </p>
            {/* price & btn */}
            <div className="flex justify-around items-center my-1 md:my-4">
              {/* price */}
              <span className="text-base md:text-2xl font-bold text-orange-500 md:text-zinc-800">
                ${menu.price}
              </span>
              {/* btn */}
              <button>
                {/* btn mobile */}
                <span className="block md:hidden font-bold text-2xl w-10 h-10 text-white bg-orange-500 rounded-full">
                  +
                </span>
                {/* btn pc */}
                <span className="hidden md:block w-36 h-12  bg-orange-500 text-white text-base rounded-full leading-10	">
                  Order now
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
