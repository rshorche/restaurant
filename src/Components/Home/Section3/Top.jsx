// import React, { useEffect, useState } from "react";

// export default function Top({selectHnadler}) {
//   const [catagory, setCategory] = useState([]);

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   function getAllCategory() {
//     fetch("http://localhost:4000/menusCategory")
//       .then((res) => res.json())
//       .then((menu) => setCategory(menu));
//   }

//   return (
//     <div className="text-center">
//       {/* title */}
//       <h4 className="text-orange-950 text-4xl md:text-7xl font-bold	my-20">
//         Our popular menu
//       </h4>
//       {/* menu */}
//       <div className="flex flex-wrap gap-4 my-14 justify-center text-xs md:text-xl child:md:cursor-pointer child:bg-gray-50 child:rounded-full child:px-6 child:py-3 child:md:px-10 child:md:py-4">
//         {catagory.map((menu) => (
//           <span
//             className={`${
//               menu.selected === "true" ? "text-white !bg-orange-950" : ""
//             }`}
//             onClick={()=>selectHnadler(menu)}
//             key={menu.id}>
//             {menu.title}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
