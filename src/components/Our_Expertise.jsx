import React from 'react';
import {
    FaUser,
    FaMoneyBill,
    FaBuilding,
    FaHome,
    FaVideo,
    FaBitcoin,
    FaUsers,
    FaFileAlt,
    FaHandshake,
    FaChartLine,
    FaPiggyBank,
    FaLandmark
} from 'react-icons/fa';

const ExpertiseSection = () => {
    const expertiseItems = [
        {
            icon: <FaUser className="w-6 h-6" />,
            title: "Self Assessment Tax Accountant",
            description: "Login made easy. Get help with registering and filing your self-assessment tax return accurately and on time."
        },
        {
            icon: <FaMoneyBill className="w-6 h-6" />,
            title: "Board Services",
            description: "Some free-office payroll outsourcing service for annual and medium businesses. Examples and Completed."
        },
        {
            icon: <FaChartLine className="w-6 h-6" />,
            title: "Income Tax Accountant",
            description: "Expert personal income tax accountants services for productive executing accounts tax filing and maximum saving."
        },
        {
            icon: <FaUser className="w-6 h-6" />,
            title: "Inheritance Tax Planning",
            description: "Expert inheritance tax advice can you be noticed your wealth. Personified estate planning tips for your family's future."
        },
        {
            icon: <FaBuilding className="w-6 h-6" />,
            title: "Life/Guide Disclosure Facility",
            description: "Expert HTTBC tax accountants advice to help you safely disclose offshore income in the UK and social premises."
        },
        {
            icon: <FaHome className="w-6 h-6" />,
            title: "Let Property Campaign",
            description: "Clear and trusted tax advice to help you disclose your rental income for HTTBC. Provide submissions and stay pending free."
        },
        {
            icon: <FaHandshake className="w-6 h-6" />,
            title: "Non-UK Resident Taxation",
            description: "Release by expert taxation accountants guiding Non-UK residents for companies and helping them in UK tax rules."
        },
        {
            icon: <FaVideo className="w-6 h-6" />,
            title: "Film-tax relief",
            description: "Empowering creativity, beauty growth, creating your productive quarters and inspiring your claim: UK film tax credits."
        },
        {
            icon: <FaBitcoin className="w-6 h-6" />,
            title: "Cryptocurrency",
            description: "Trusted accountants helping you report transactions, calculate tax on crypto gains while staying in line with Crypto tax rules."
        },
        {
            icon: <FaHome className="w-6 h-6" />,
            title: "Capital Gain Tax",
            description: "Get expert capital gains tax advice from trusted and specialist accountants for minimising liabilities and letting relief."
        },
        {
            icon: <FaFileAlt className="w-6 h-6" />,
            title: "SEIS/EIS Tax Relief",
            description: "Save money, claim tax relief, and grow your investments with SEIS tax relief advice and support by expert EIS accountants."
        },
        {
            icon: <FaLandmark className="w-6 h-6" />,
            title: "Estate Tax Planning",
            description: "Structure your wealth the best, reduce liabilities, and secure your family's financial future with our expert estate tax accountants."
        }
    ];

    return (
        <div className="min-h-screen bg-white py-7 px-4 sm:px-6 lg:px-8 rounded-sm border-t-8 border-[#D2601A]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className='flex justify-center flex-col sm:flex-row items-center sm:gap-3'>
                        <span className='w-24 h-[2px]  bg-orange-500'></span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Expertise
                        </h1>
                        <span className='w-24 h-[2px]  bg-orange-500'></span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-900 font-semibold max-w-3xl mx-auto">
                        We are the largest partner in our Geosensors in London, United Kingdom.
                    </p>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-8">
                    {expertiseItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1D3C45] hover:bg-[#D2601A] rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:py-6 md:px-1 border-b-8 border-[#D2601A] hover:border-[#1D3C45] group/main" // Added group/main
                        >
                            <div className="flex flex-col px-6 items-center">
                                <div className='rounded-full flex items-center justify-center w-[60px] h-[60px] bg-white group-hover/main:bg-[#1D3C45] transition duration-300'> {/* Changed to group-hover/main */}
                                    <span className='flex items-center justify-center text-orange-500 group-hover/main:text-white transition duration-300'> {/* Changed to group-hover/main */}
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold underline text-white mb-3 text-center mt-2">
                                    {item.title}
                                </h3>
                                <p className="text-white leading-relaxed text-center">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSection;