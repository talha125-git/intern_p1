import React from "react";
import personImg from "../assets/uk's_largest.jpg";

const LargestOnlineAccountants = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Heading */}
                <div className="flex justify-center mb-14">
                    <div className="bg-[#1f3c44] text-white w-full px-6 py-2 rounded-full text-2xl md:text-4xl font-medium">
                        The UK's Largest Online Accountants
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col text-start md:flex-row items-center gap-2">

                    {/* Left Text */}
                    <div className="md:w-1/2 text-gray-800 space-y-6 text-[16px] leading-relaxed">
                        <p>
                            Taxacolega isn’t your average accounting firm. We’re a team of
                            passionate online accountants dedicated to empowering businesses
                            in the UK with the tools and support they need to thrive.
                        </p>

                        <p>
                            We are the largest online accounting company in the United Kingdom,
                            leveraging technology to provide a seamless and efficient
                            experience for our clients.
                        </p>

                        <p>
                            But size doesn’t mean impersonal service. At Taxacolega, you’ll get
                            a dedicated accountant who understands your unique business needs.
                        </p>

                        <p className="font-semibold">
                            To learn more about how we can help you grow your business,&nbsp;
                            <span className="text-[#1f3c44] cursor-pointer hover:underline">
                                contact us today:
                            </span>
                        </p>

                        {/* Google Rating */}
                        <div className="flex items-center justify-center gap-2 pt-4">
                            <span className="text-lg font-medium">Google</span>
                            <div className="flex text-yellow-400 text-xl">
                                ★★★★★
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
                            <img
                                src={personImg}
                                alt="Accountant"
                                className="w-[320px] md:w-[380px] lg:w-[420px] rounded-lg object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LargestOnlineAccountants;
