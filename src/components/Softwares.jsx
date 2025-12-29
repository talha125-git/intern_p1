import React from 'react'
import Laptop_img from '../assets/laptop_img.jpg'

const Softwares = () => {
    return (
        <section className="py-10">
            {/* Heading */}
            <div className="flex items-center flex-col sm:flex-row justify-center gap-4 mb-10">
                <span className="w-40 sm:w-20 md:w-32 h-[2px] bg-[#D2601A]"></span>

                <h2 className="text-4xl lg:text-6xl font-bold text-[#0b2c3d]">
                    SOFTWARES
                </h2>

                <span className="w-40 sm:w-20 md:w-32 h-[2px] bg-[#D2601A]"></span>
            </div>

            {/* Content Box */}
            <div className="w-auto  bg-[#fff7f6] p-6 rounded-3xl">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start gap-0">
                    
                    {/* Image Section */}
                    <div className="md:w-1/3 w-full flex">
                        <img
                            src={Laptop_img}
                            alt="QuickBooks"
                            className="rounded-2xl w-full h-auto object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 w-full md:pl-6 mt-6 md:mt-0">
                        <span className="block text-black text-start text-lg font-bold mb-3">
                            QUICKBOOKS
                        </span>

                        <p className="text-gray-700 text-justify leading-relaxed text-[15px]">
                            Taxacolega sees QuickBooks not only as a tool but as a One Stop Solution for organizing the finances of your company. One can envision smoothly managing payroll, automatically handling VAT returns, and easily tracking costs, all simultaneously. QuickBooks makes your accounting work easier whether you are a freelancer or an expanding SME, so you can focus on growing your company. Taxacolega being QuickBooks certified accountants customizes the software for you, therefore guaranteeing your tax filing, financial reports always on target, and providing current insights. Let us demonstrate to you how QuickBooks might revolutionize your company’s workflow.
                            <span className="font-semibold text-black"> Read More</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Softwares
