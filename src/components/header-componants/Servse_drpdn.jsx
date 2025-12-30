// Servse_drpdn.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import taxImg from "./assets/tax.jpg";
import accountsImg from "./assets/accounts.jpg";
import legalImg from "./assets/Legal.jpg";
import softwareImg from "./assets/software.jpg";
import banksImg from "./assets/Bank.jpg";
import logoArrow from "./assets/A_logo.png";

const services = [
  { title: "TAXATION", img: taxImg },
  { title: "ACCOUNTS", img: accountsImg },
  { title: "LEGAL", img: legalImg },
  { title: "SOFTWARE", img: softwareImg },
  { title: "BANKS", img: banksImg, tall: true },
];

const Services = () => {
  return (
    <section className="w-full md:h-[550px] lg:translate-x-28   bg-white  flex flex-col lg:flex-row p-14">

      {/* Left Panel */}
      <div className="bg-[#e9e6df] rounded-2xl p-8 w-full lg:w-[300px]   flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Explore the wide range of services provided by Taxaccollega
          </p>
        </div>

        <div className="flex justify-center my-10">
          <img src={logoArrow} alt="Logo" className="w-32" />
        </div>

        <button className="bg-[#0f3b44] text-white py-3 rounded-full text-sm hover:opacity-90 transition">
          CONTACT US
        </button>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col lg:flex-row gap-8 h-auto  justify-center">

        {/* LEFT DIV → 4 SERVICES */}
        <div className="grid grid-cols-1 md:w-[500px] md:grid-cols-2 mt-6  px-7 md:gap-12 gap-6">
          {services.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-2 text-center
             transition-all duration-300 ease-out
             hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover
                 transition-all duration-300
                 group-hover:brightness-110"
                />

                {/* Whitish overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100" />
              </div>

              <h3 className="mt-4 text-sm tracking-widest font-medium transition-colors duration-300">
                {item.title}
              </h3>
            </div>

          ))}
        </div>


        {/* RIGHT DIV → 1 SERVICE */}
        <div className="flex">
          <div
            className="group bg-white rounded-xl shadow-lg p-4 text-center w-[260px]
               transition-all duration-300 ease-out
               hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={services[4].img}
                alt={services[4].title}
                className="w-full h-full object-cover
                   transition-all duration-300
                   group-hover:brightness-110"
              />

              {/* Whitish overlay */}
              <div
                className="absolute inset-0 bg-white/10 opacity-0
                   transition-opacity duration-300
                   group-hover:opacity-100"
              />
            </div>

            <h3 className="mt-4 text-sm tracking-widest font-medium transition-colors duration-300">
              {services[4].title}
            </h3>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Services;
