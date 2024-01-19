import React from "react";

export default function Section2() {
  return (
    <div className="mt-40 flex justify-center">
      <div className="flex justify-center items-center gap-8 flex-wrap-reverse w-11/12">
        <div>
          <p className="max-w-xs md:max-w-md text-gray-500 text-xs md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
        <div>
          <img
            className="max-w-full md:max-w-xl "
            src="images/about/section2.png"
            alt="section2"
          />
        </div>
      </div>
    </div>
  );
}
