import React from "react";

export default function Down() {
  return (
    <div className="mx-auto my-10 md:my-20 text-center">
      {/* pc */}
      <div className="hidden md:flex justify-center gap-2 items-center">
        {/* arrow left */}
        <div>
          <img
            className="p-3 rounded-2xl bg-orange-950 rotate-180 md:cursor-pointer"
            src="images/other/arrowRight.png"
            alt="arrowLeft"
          />
        </div>
        {/* paginations */}
        <div className="child:p-3 child:mx-1 child:rounded-lg text-orange-500 child:bg-orange-100 child:md:cursor-pointer">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
        </div>
        {/* arrow right */}
        <div>
          <img
            className="p-3 rounded-2xl bg-orange-950 md:cursor-pointer"
            src="images/other/arrowRight.png"
            alt="arrowRight"
          />
        </div>
      </div>
      {/*  mobile */}
      <button className="inline-block md:hidden text-white bg-green-500 text-xl w-36 h-12 rounded-3xl">
        Redemore
      </button>
    </div>
  );
}
