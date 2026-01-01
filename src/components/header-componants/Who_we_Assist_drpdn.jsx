import React from 'react'
import logo from "./assets/A_logo.png"
import IT_Professional from "./assets/IT_Professional.jpg"
import Construction from "./assets/Construction.jpg"
import Automobile from "./assets/Automobile.webp"
import Leisure_Industry from "./assets/Leisure_Industry.webp"
import Real_Estate from "./assets/Real_Estate.webp"
import Restaurant from "./assets/Restaurant.webp"
import Hospitality from "./assets/Hospitality.webp"
import Non_Uk_Resident from "./assets/Non_Uk_Resident.webp"
import Ecomerce from "./assets/Ecomerce.webp"
import Health_Care from "./assets/Health_Care.webp"
import Wholesale from "./assets/Wholesale.webp"
import Charity from "./assets/Charity.webp"
import Expatriates from "./assets/Expatriates.webp"
import Logistics from "./assets/Logistics.webp"

const servicesData = [
  { img: IT_Professional, title: "IT PROFESSIONAL", alt: "IT Professional" },
  { img: Construction, title: "Construction", alt: "Construction" },
  { img: Automobile, title: "Automobile", alt: "Automobile" },
  { img: Leisure_Industry, title: "Leisure Industry", alt: "Leisure Industry" },
  { img: Real_Estate, title: "Real Estate", alt: "Real Estate" },
  { img: Restaurant, title: "Restaurant", alt: "Restaurant" },
  { img: Hospitality, title: "Hospitality", alt: "Hospitality" },
  { img: Non_Uk_Resident, title: "Non-Uk-Resident", alt: "Non Uk Resident" },
  { img: Ecomerce, title: "Ecomerce", alt: "Ecomerce" },
  { img: Health_Care, title: "Health Care", alt: "Health Care" },
  { img: Wholesale, title: "Wholesale & Retailers", alt: "Wholesale & Retailers" },
  { img: Charity, title: "Charity", alt: "Charity" },
  { img: Expatriates, title: "Expatriates", alt: "Expatriates" },
  { img: Logistics, title: "Logistics", alt: "Logistics" },
]

const Who_we_Assist_drpdn = () => {
  return (
    <section className='flex md:flex-row md:w-[1100px] justify-start p-4 items-start gap-4 flex-col'>

      {/* left */}
      <div className='bg-[#e9e6df] rounded-2xl p-8 w-full md:w-[300px] md:h-[550px] h-full flex flex-col justify-between'>
        <div>
         <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Explore the wide range of services provided by Taxaccollega
          </p>
        </div>

        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="w-full px-4 py-4">
          <button className="w-full bg-[#0f3b44] text-white py-3 rounded-full text-sm hover:bg-[#D2601A] transition">
            Contact us
          </button>
        </div>
      </div>

      {/* right */}
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0'>
        {servicesData.map((item, index) => (
          <div key={index} className="cursor-pointer w-[80%] text-center
              ">
            <div className="p-3">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-20 object-cover rounded-lg
                transition-all duration-300 ease-out
             hover:-translate-y-2 hover:scale-105"
              />
            </div>

            <p className="text-center text-sm font-semibold text-black hover:text-[#D2601A] pb-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Who_we_Assist_drpdn
