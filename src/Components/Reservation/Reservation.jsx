import React from "react";

export default function Reservation() {
  return (
    <div className="my-24 md:my-48 ">
      <div className="flex items-center flex-wrap gap-8">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full"
            src="images/reservation/reservation.png"
            alt="reservation"
          />
        </div>
        <div className="mx-auto ">
          <h3 className="font-bold text-7xl text-orange-950">Book a table</h3>
          <form
            action="#"
            className="flex flex-col gap-6 child:bg-gray-100 child:py-4 child:px-10 child:rounded-xl child:outline-none mt-5 ">
            <input type="date" />
            <input type="time" />
            <select className="flex items-center justify-center">
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="big">big</option>
            </select>
            <button className="font-bold text-2xl !bg-orange-500 text-white">
              Book now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
