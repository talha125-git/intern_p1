import React, { useState, useRef } from 'react';
import Google_img from '../assets/Google2.jpg';
import Exelent_img from '../assets/exelent_img.svg';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { FaStar } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const reviews = [
    {
        name: "Mr Opinionated",
        date: "2025-03-28",
        rating: 5,
        review:
            "Excellent speedy service! Taxaccolega wasted no time. I worked with Jazzy and he was spectacular always kept me in the loop and worked very efficiently would recommend to all those looking for competent and...",
    },
    {
        name: "Mr Opinionated",
        date: "2025-03-28",
        rating: 5,
        review:
            "This is a very trustworthy and efficient company. They are very responsive, straightforward, knowledgeable, and cost efficient. I highly recommend their services for anyone needing professional help.",
    },
    {
        name: "Malek Sleiman",
        date: "2025-02-21",
        rating: 5,
        review:
            "My experience with Taxaccolega has been first class. They always explain things well and communicate swiftly. Jazzy and Nabeel have done a fantastic job assisting me throughout the process.",
    },
];

const Google_Reviews = () => {
    const [expanded, setExpanded] = useState(Array(reviews.length).fill(false));
    const contentRefs = useRef([]);

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <section className='w-full py-14'>
            <div className='flex flex-col items-center gap-10'>
                {/* Heading */}
                <div className="bg-[#D2601A] text-white w-full px-6 py-2 rounded-full text-2xl md:text-4xl font-medium text-center">
                    Our Recent Google Reviews
                </div>

                {/* Google summary box */}
                <div className='flex justify-center'>
                    <div className='flex border border-gray-500 rounded-3xl w-auto flex-wrap sm:w-[400px] shadow-xl gap-4 p-4 justify-center items-center'>
                        <img className='w-48 max-w-full' src={Google_img} alt="Google Reviews" />
                        <p className='text-lg font-semibold'>5.0 | 187 reviews</p>
                    </div>
                </div>

                {/* Reviews and EXCELLENT box */}
                <div className='flex flex-col md:flex-row gap-2 justify-center items-start'>
                    {/* Left: EXCELLENT box */}
                    <div className=' flex  items-center justify-center text-start p-5  w-[250px]  flex-col'>
                        <h2 className='font-bold text-xl'>EXCELLENT</h2>
                        <div className="flex my-2">
                            {[...Array(5)].map((_, idx) => (
                                <IonIcon key={idx} icon={star} className="text-yellow-400 w-6 h-6" />
                            ))}
                        </div>
                        <p>Based on 187 reviews</p>
                        <div className='mt-4'>
                            <img src={Exelent_img} className='w-25 max-w-full' alt="Excellent" />
                        </div>
                    </div>

                    {/* Right: Reviews */}
                    <div className='flex overflow-x-auto flex-wrap justify-center gap-6'>
                        {reviews.map((review, idx) => {
                            const isExpanded = expanded[idx];
                            const maxHeight = isExpanded
                                ? contentRefs.current[idx]?.scrollHeight || 'auto'
                                : 72; // approx 3 lines

                            return (
                                <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-md w-[240px] flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                                                {review.name.split(" ").map((n) => n[0]).join("")}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{review.name}</h3>
                                                <p className="text-gray-500 text-sm">{review.date}</p>
                                            </div>
                                        </div>
                                        <FcGoogle size={24} />
                                    </div>

                                    <div className="flex items-center mb-4">
                                        {[...Array(review.rating)].map((_, idx) => (
                                            <FaStar key={idx} className="text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <div
                                        ref={(el) => (contentRefs.current[idx] = el)}
                                        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                                        style={{ maxHeight }}
                                    >
                                        <p className="text-gray-700 text-justify">{review.review}</p>
                                    </div>

                                    {/* Read More / Hide Button */}
                                    <button
                                        className="text-blue-500 mt-2 text-sm font-semibold hover:underline self-start"
                                        onClick={() => toggleExpand(idx)}
                                    >
                                        {isExpanded ? 'Hide' : 'Read More'}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Google_Reviews;

