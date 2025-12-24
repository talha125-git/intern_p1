
import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/partners_pics/p1.jpg";
import img2 from "../assets/partners_pics/p2.jpg";
import img3 from "../assets/partners_pics/p3.jpg";
import img4 from "../assets/partners_pics/p4.jpg";
import img5 from "../assets/partners_pics/p5.jpg";
import img6 from "../assets/partners_pics/p6.jpg";
import img7 from "../assets/partners_pics/p7.jpg";
import img8 from "../assets/partners_pics/p8.jpg";
import img9 from "../assets/partners_pics/p9.jpg";
import img10 from "../assets/partners_pics/p10.jpg";


const Partners = () => {
  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
  ];

  return (
    <div className="py-10 ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">

        Our Clients and Collaborative Partners
      </h2>


      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-3  place-items-center">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`partner-${index}`}
            className="h-16 object-contain "
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;

