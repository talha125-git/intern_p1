// ParallaxSection.jsx
import React from 'react';
import backgroundImage from '../assets/parallax_img.jpg'; 

const ParallaxSection = () => {
    return (
        <section className="w-full py-8 md:py-20 overflow-x-hidden">
            <div
                className="relative w-screen bg-fixed bg-center bg-cover flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`, 
                    minHeight: '60vh',
                    maxHeight: '80vh',
                    marginLeft: 'calc(50% - 50vw)', // Force full width
                    marginRight: 'calc(50% - 50vw)', // Force full width
                    width: '100vw', // Full viewport width
                }}
            >
                {/* Gradient overlay from edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"></div>

                {/* Content that touches edges on mobile */}
                <div className="relative z-10 w-full h-full flex items-center justify-center px-0 sm:px-4 md:px-6 lg:px-8">
                    <div className="w-full max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 
                                  px-4 ">
                        <div className="px-4 ">
                            <p className="text-white text-start text-sm px-4  ">
                                Chartered Accountants are financial professionals with specialised knowledge
                                and expertise in tax laws, accounting, and financial management. They're an
                                essential resource for anyone seeking to optimise their tax efficiency and
                                financial performance. Below, we'll explore the different types of individuals
                                and businesses who can benefit from chartered accountant services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxSection;