import React from "react";
import Top_Rated_img from "../assets/top_rated.jpg"; // replace with your image

const Top_Rated = () => {
    return (
        <section className="w-full bg-white py-14">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* Orange line */}
                    <div className="flex items-start gap-3 mb-4">
                        {/* <span className="w-1 md:h-32 h-12 bg-orange-500"></span> */}
                        <h2 className="text-start border-l-4 border-orange-500 px-8 text-black sm:text-3xl text-2xl md:text-4xl font-bold">
                            Top Rated Chartered Accountants in London - <br className="lg:block hidden" /> <span className="text-[#1D3C45]"> Local Tax & Accounting <br className="lg:block hidden" /> Firm </span>
                        </h2>
                    </div>

                    <p className="font-semibold text-start text-black text-lg ">
                        Discover simple and effective Accounting Solutions with Taxaccolega.
                    </p>

                    <p className="text-gray-700 text-start leading-relaxed mb-6 max-w-xl">
                        Taxaccolega wasn’t built to be just another accountancy firm.
                        Since we don't just do the numbers, so it grew from a simple belief:
                        real support goes beyond spreadsheets. It means promptly answering
                        the call when a client’s unsure. It means patiently explaining things
                        without using jargons. And it means celebrating growth, not just
                        tracking it.
                    </p>

                    <button className="bg-[#1f3c44] flex text-white px-9 py-3 rounded-full 
                      hover:bg-orange-500 
                        transition-all cursor-pointer duration-[400ms]
                        hover:-translate-y-2">
                        About-Us
                    </button>

                </div>

                {/* RIGHT IMAGE */}

                <div className="rounded-3xl flex justify-center  overflow-hidden">
                    <img
                        src={Top_Rated_img}
                        alt="Accountant"
                        className="lg:w-[472px] md:w-[372px] sm:w-[272px] h-full object-cover"
                    />
                </div>





            </div>
        </section>
    );
};

export default Top_Rated;
