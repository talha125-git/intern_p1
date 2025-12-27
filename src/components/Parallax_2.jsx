import React from "react";

const ParallaxHero = () => {
    return (
        <section className="bg-[#1D3C45]">
            <section
                className="relative min-h-screen w-full bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-700/70"></div>

                {/* Content */}
                <div className="relative z-10 text-start max-w-6xl mx-auto px-6 py-16 flex items-center min-h-screen">
                    <div className="text-white max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Switch Accountants to Taxaccolega — Hassle-Free,  in Croydon  &  London
                        </h2>

                        <div className="space-y-3 mt-6">
                            <p className=" text-sm md:text-base text-gray-200 leading-relaxed">
                                If your current accountant / accounting firm is unable to compile your
                                accounts and figures or not being up to the mark that you expect, it may
                                be time for a change. Though changing accountants might be intimidating,
                                we follow the correct procedures and make it simple, stress-free, and profitable
                                for your company.
                            </p>

                            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                                Top-rated Chartered Accountants at Taxaccolega, with professional accounting
                                experience serving UK clients since 2011, make the entire transition process
                                of changing an accountant easy for you. Whether you are upset due to poor communication,
                                no tax-saving ideas, or hidden costs, our accounting is transparent, proactive, and client-centered.
                            </p>

                            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                                Don’t settle for mediocre service. Switch today! Get in touch for a smooth, stress-free transition.
                            </p>
                        </div>

                        <div className="flex justify-center mt-5 items-center">
                            <button
                                type="submit"
                                className="hover:bg-[#D2601A] bg-[#1D3C45] duration-200 transition text-white 
                                        text-sm 
                                        flex items-center justify-center
                                        w-full sm:w-auto
                                        px-20 py-2 rounded-full "
                            >
                                Switch Account
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex text-black justify-center sm:gap-0 gap-2 sm:p-0 p-2 sm:justify-start flex-wrap">
                    <div className="w-[180px]  bg-white border-r-2 shadow-lg p-6 text-center">
                        <h2 className="text-[30px] font-semibold">1,544+</h2>
                        <p className="text-sm text-orange-500 font-semibold">Project Completed</p>
                    </div>

                    <div className="w-[180px]  bg-white border-r-2 shadow-lg p-6 text-center">
                        <h2 className="text-[30px] font-semibold">1,822+</h2>
                        <p className="text-sm text-orange-500 font-semibold">Client Satisfaction</p>
                    </div>

                    <div className="w-[180px]  bg-white border-r-2 shadow-lg p-6 text-center">
                        <h2 className="text-[30px] font-semibold">10+</h2>
                        <p className="text-sm text-orange-500 font-semibold">Business Consultant</p>
                    </div>

                    <div className="w-[180px]  bg-white shadow-lg p-6 text-center">
                        <h2 className="text-[30px] font-semibold">15+</h2>
                        <p className="text-sm text-orange-500 font-semibold">Awards</p>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default ParallaxHero;
