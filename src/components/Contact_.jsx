import React from "react";
import { IonIcon } from "@ionic/react";
import {
    call,
    logoWhatsapp,
    mail,
    location,
} from "ionicons/icons";


const ContactSection = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center ">
            <div className="w-full max-w-6xl bg-white rounded-2xl border-2  border-black shadow-xl p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl text-start font-bold text-[#0b2c3d] mb-6">
                            Get in Touch
                        </h2>

                        <div className="space-y-5 text-start text-[#0b2c3d]">

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <IonIcon
                                    icon={call}
                                    className="text-orange-500 text-2xl mt-1"
                                />
                                <div>
                                    <p className="text-xl font-bold ">Phone number</p>
                                    <p className="text-sm">020 8127 0728</p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-3">
                                <IonIcon
                                    icon={logoWhatsapp}
                                    className="text-orange-500 text-2xl mt-1"
                                />
                                <div>
                                    <p className="text-xl font-bold ">Whatsapp</p>
                                    <p className="text-sm">074 7117 0484</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <IonIcon
                                    icon={mail}
                                    className="text-orange-500 text-2xl mt-1"
                                />
                                <div>
                                    <p className="text-xl font-bold ">Email</p>
                                    <p className="text-sm">info@taxaccollege.co.uk</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3">

                                <IonIcon
                                    icon={location}
                                    className="text-orange-500 text-2xl mt-1"
                                />
                                <div>
                                    <p className="text-xl font-bold ">Address</p>
                                    <p className="text-sm">
                                        187a London Road, Croydon, Surrey, CR0 2RJ
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-6 rounded-lg overflow-hidden border">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps?q=187a%20London%20Road%20Croydon&output=embed"
                                className="w-full h-52"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="text-start">
                        <h2 className="text-3xl font-bold text-[#0b2c3d] mb-6">
                            Send Us a message
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full mt-1 px-4 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mt-1 px-4 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Message"
                                    className="w-full mt-1 px-4 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="bg-[#D2601A] hover:bg-[#1D3C45] duration-200 transition text-white 
                                        text-sm font-semibold
                                        flex items-center justify-center
                                        w-full sm:w-auto
                                        px-20 py-2 rounded-full "
                                >
                                    SEND
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactSection;
