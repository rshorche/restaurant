import React from "react";

export default function Contact() {
  return (
    <div className="mt-48 mb-20">
      <div className="flex items-center justify-center  flex-col text-center gap-5 w-11/12 mx-auto">
        <div>
          <h3 className="font-bold text-3xl md:text-7xl text-orange-950">Contact us</h3>
          <p className="text-gray-500 my-5">
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 child:w-full child:md:w-1/3 child:bg-gray-100 child:rounded-2xl child:py-3 child:px-6">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Subject" />
          <textarea className="w-full md:!w-3/5" placeholder="Message" rows="7"></textarea>
        </div>
        <button className="font-bold text-sm md:text-2xl text-white bg-orange-500 px-14 py-2 md:px-20 md:py-4 rounded-xl">Submit</button>
      </div>
    </div>
  );
}
