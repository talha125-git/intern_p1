import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";
import Laptop from "../assets/laptop_man1.jpg"

const Choose = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (section) => {
        setOpenDropdown(openDropdown === section ? null : section);
    };


    const features = [
        { title: "Dedicated Local & Online Accountant", description: "Taxaccolega provides personalised assistance. You get a dedicated accountant when you work with us who fully knows the ins and outs of your finances. No call centers, no general advice, but a real expert focusing on your specific tax and accounting needs." },
        { title: "Accredited Chartered Accountant", description: "Your finances are in the hands of qualified accountants and credible experts since we are licensed and regulated by ICAEW and ACCA. Whether it’s tax planning, accounting advice, or compliance, we 100% guarantee everything is done honestly, accurately, and completely aligned with UK tax laws." },
        { title: "Optimised Taxation", description: "Have been paying too much tax? We will optimise and curtail your unnecessary payable taxes. While we plan and structure strategically and carefully, we help you maximize tax efficiency, claim available reliefs, and avoid unnecessary liabilities, all while staying HMRC-compliant." },
        { title: "Total Transparency", description: "No hidden fees. No surprise charges. We believe in clear, upfront pricing and full transparency in our work. We also use reliable, industry-leading accounting softwares like Xero, Taxcalc, btc, & VT to ensure your tax and financial security, total accuracy and efficiency." },
        { title: "Timely Reminders", description: "Deadlines creep up fast, but we won’t let you miss them. We provide timely reminders for tax filings, payments, and compliance requirements, so you never have to worry about penalties or last-minute stress ever again." },
        { title: "Expert Value Added Guidance", description: "Beyond just the numbers, we provide cashflow forecasting to help you plan for the future. Tax-saving opportunities, investment structuring, or business growth tactics, we’re here to guide you toward smarter tax-saving decisions." }
    ];

    return (
        <section className="py-12 md:py-10 ">
            
        <div className="min-h-screen  border-t border-b border-gray-400 bg-white p-6 ">
            <div className="max-w-6xl mx-auto">
                {/* Header */}

                {/* Main Content */}
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
                    {/* Left Column - Text Content */}
                    <div className="grid place-items-center space-y-6 w-auto h-auto">
                        <img src={Laptop} alt="" />
                    </div>

                    {/* Right Column - Dropdown Features */}
                    <div className="space-y-1 ">
                        <div className="text-start">
                            <h2 className=" text-lg md:text-3xl font-['Aguafina_Script']  font-bold text-gray-900 -mb-3 ">
                                Services
                            </h2>
                            <h2 className="text-2xl md:text-5xl font-[Baumans] font-bold text-orange-500 mb-6">
                                Why Choose Us
                            </h2>
                        </div>
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white overflow-hidden">
                                <button
                                    onClick={() => toggleDropdown(`feature-${index}`)}
                                    className="w-full flex items-center bg-[#1D3C45]  justify-between  px-2 text-left"
                                >
                                    <span className="text-lg font-semibold ">{feature.title}</span>
                                    <div className="flex items-center space-x-4">
                                        {openDropdown === `feature-${index}` ? (
                                            <span className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white hover:text-orange-400 transition duration-300 rounded-lg">–</span>
                                        ) : (
                                            <span className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white hover:text-orange-400 transition duration-300 rounded-lg">+</span>
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-1000 ${openDropdown === `feature-${index}`
                                     ?
                                     'max-h-64 opacity-100' 
                                     : 
                                     'max-h-0 '
                                        }`}
                                >
                                    <div className="p-6 pt-0 border-t border-gray-100">
                                        <p className="text-gray-600 text-start leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
            
        </section>
    );
};

export default Choose;