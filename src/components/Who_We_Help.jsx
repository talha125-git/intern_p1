import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline } from "ionicons/icons";
import Who_We_Help_img from "../assets/Who-Do-We-help.jpg"

const items = [
    "IT Professional",
    "Hospitality",
    "Non-UK-Resident",
    "Restaurants",

    "Construction",
    "Auto Mobile",
    "Real Estate",
    "Real Estate",

    "Ecommerce",
    "Charity",
    "Expatriates",
    "Logistics",

    "Health Care",
    "Wholesale & Retailers",
    "Leisure Industry",
    "Non-UK-Resident",
];

const WhoWeHelp = () => {
    return (
        <section className="bg-white py-16 px-4">
            {/* Heading */}
            <div className="text-center mb-12">
                <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
                    <span className=" w-40 sm:w-20 md:w-32 h-[2px] bg-orange-500"></span>
                    <h2 className="text-4xl lg:text-7xl font-bold text-[#0b2c3d]">
                        Who Do We Help
                    </h2>
                    <span className=" w-40 sm:w-20 md:w-32 h-[2px] bg-orange-500"></span>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="relative">
                        <img
                            //   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                            src={Who_We_Help_img}
                            alt="business"
                            className="w-64 h-64 object-cover rounded-full"
                        />

                        {/* Decorative dots */}
                        <div className="absolute inset-0 border-2 border-dashed border-orange-400 rounded-full"></div>
                    </div>
                </div>

                {/* Right Content Box */}
                <div className="md:col-span-2 bg-[#FEF9FA]  rounded-xl p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 text-start lg:grid-cols-4 gap-y-4 gap-x-3">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <IonIcon
                                    icon={checkmarkCircleOutline}
                                    className="text-orange-500 font-bold text-lg mt-1"
                                />

                                <span className="text-sm text-[#0b2c3d] mt-[2px] font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhoWeHelp;
