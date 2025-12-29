import React from "react";
import speak_to_the_uk_img from "../assets/speak_to_the_uk_img.jpg"; // replace with your image

const Top_Rated = () => {
    return (
        <section className="w-full bg-white py-14">
            {/* Headngs */}
             <div className="text-center space-y-4 mb-12">

                <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
                    <span className=" w-40 sm:w-20 md:w-32 h-[2px] bg-[#D2601A]"></span>
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#0b2c3d]">
                        Speak To the UK's
                    </h2>
                    <span className=" w-40 sm:w-20 md:w-32 h-[2px] bg-[#D2601A]"></span>
                </div>
                <h2 className="text-xl lg:text-3xl font-bold text-[#D2601A]">Top Rated Chartered Accountant Today</h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-4 items-center">
                                                   {/* grid md:grid-cols-2      */}
                {/* RIGHT IMAGE */}
                <div className="rounded-3xl flex justify-center  overflow-hidden">
                    <img
                        src={speak_to_the_uk_img}
                        alt="Accountant"
                        className="lg:w-[472px] md:w-[372px] w-full sm:w-[330px] h-full object-cover"
                    />
                </div>

                {/* LEFT CONTENT */}
                <div className="border-2 border-[#D2601A] rounded-3xl w-auto sm:w-[450px]  p-2">
                    

                    <div className="text-black">
                        <h3 className="text-black font-semibold text-xl text-start leading-relaxed mb-4">Are you looking for a local accountant you can trust?</h3>
                        <p className=" text-sm text-justify leading-relaxed mb-4 ">
                            Our expert tax consultants, tax specialists, and chartered accountants at
                            Taxaccolega are top-rated in the UK. Whether you need online accountant services
                            or prefer a face-to-face meeting with an accountant in London, consider us always
                            at your doorstep.
                        </p>
                        <p className=" text-sm text-justify leading-relaxed mb-4 ">
                            Book a call or video meeting with one of our experienced and specialist UK accountants
                            today. Whether you’re looking for an online accountant in Croydon or a chartered accountant
                            in London, UK, get to know how our personalized solutions can take your business off,
                        </p>
                        <p className=" text-sm text-justify leading-relaxed mb-4 ">
                            Let’s talk – schedule your free consultation now!
                        </p>
                        
                        <div className="flex justify-center">
                        <button className="bg-[#1f3c44] mt-14 flex text-white px-9 py-3 rounded-full 
                      hover:bg-[#D2601A] text-sm
                        transition-all cursor-pointer duration-[400ms]
                        hover:-translate-y-2">
                            Book a call & Meeting
                        </button>
                        </div>
                    </div>
                </div>







            </div>
        </section>
    );
};

export default Top_Rated;
