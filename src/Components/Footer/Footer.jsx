import React from "react";

export default function Footer() {
  return (
    <div className="bg-amber-950 pt-10 mx-auto text-white text-sm md:text-lg">
      <div className="flex justify-evenly flex-wrap gap-2 ">
        {/* col 1 */}
        <div>
          {/* logo */}
          <div className="font-bold flex items-center">
            {/* D */}
            <p className="bg-orange-500 text-white w-12 h-12 rounded-full text-center text-2xl leading-10	">
              D
            </p>
            {/*Delizi & oso  */}
            <span className="text-white pl-4">
              Delizi<span className="text-orange-500">oso</span>
            </span>
          </div>
          {/* desc */}
          <p className="max-w-xs my-10">
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>
          {/* social */}
          <div className="flex gap-4 child:w-10 child:md:w-14">
            <a href="#">
              <img src="images/social/twitter.png" alt="twitter" />
            </a>
            <a href="#">
              <img src="images/social/instagram.png" alt="instagram" />
            </a>
            <a href="#">
              <img src="images/social/Facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
        {/* col 2 */}
        <div className=" child:block child:mb-2">
          <h4 className="text-orange-500 font-bold">Page</h4>
          <span>Home</span>
          <span>Menu</span>
          <span>Order online</span>
          <span>Catering</span>
          <span>Reservation</span>
        </div>
        {/* col 3 */}
        <div className=" child:block child:mb-2">
          <h4 className="text-orange-500 font-bold">Information</h4>
          <span>About us</span>
          <span>Testimonial</span>
          <span>Event</span>
        </div>
        {/* col 4 */}
        <div className=" child:block child:mb-2">
          <h4 className="text-orange-500 font-bold">Get in touch</h4>
          <p className="max-w-xs">
            3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
          </p>
          <span>rshorche@gmail.com</span>
          <span>+98 937 745 7370</span>
        </div>
      </div>
      <p className="text-center pb-2 text-green-500">Developer : rshorche </p>
    </div>
  );
}
