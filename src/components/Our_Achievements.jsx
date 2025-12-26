import React from "react";
import trophyImg from "../assets/achievement.jpg";

const Achievements = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-2 ">

                {/* Left Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={trophyImg}
                        alt="Achievements"
                        className="block w-full sm:w-[340px] md:w-[380px] lg:w-[510px] object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 text-left">
                    <p className="text-sm italic text-gray-500 mb-3">
                        Our Achievements
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0f2f36] leading-tight mb-6">
                        Taxacolega — <br />
                        Award-Winning. <br />
                        Accredited. Trusted.
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                        From prestigious ACCA and ICAEW certifications and accreditations
                        to honours from mayors, media, business networks, and industry
                        leaders, Taxacolega is more than just an accountancy firm. Being
                        the top-rated, we are a symbol of trust, professional excellence
                        and community-driven impact. Our accreditations, recognitions,
                        and awards have backend stories of commitment. They reflect years
                        of dedication to our clients, the people we proudly serve, and
                        our craft. Whether you’re a budding startup, a growing business,
                        managing wealth, or an opportunistic like a seasoned investor,
                        you’re in safe and certified hands backed by top-rated chartered
                        accountants and a team that will always go the extra mile for you.
                    </p>


                    <button className="bg-[#1f3c44] flex text-white px-9 py-3 rounded-full 
                      hover:bg-orange-500 
                        transition-all cursor-pointer duration-[400ms]
                        hover:-translate-y-2">
                        Achievements
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
