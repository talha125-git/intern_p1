import React from 'react'
import City1 from '../assets/city2.jpg'
import Google from '../assets/google_logo.png'
import { IoStar } from "react-icons/io5";

export const Hero = () => {
    return (
        <div className="relative w-full md:h-[540px] sm:h-[450px] h-auto  overflow-hidden">


            <img src={City1} alt="" />
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute flex   bottom-6 right-6 z-10 bg-white text-black p-2 rounded-4xl">
                <div className='md:w-[70px] w-[50px] h-[50px] flex items-center justify-center  md:h-[70px] px-2'>
                    <img src={Google} alt="" />
                </div>
                <div className='px-4 flex-wrap border-l-2 border-gray-200'>
                    <p className='text-start text-2xl'>Google</p>
                    <div className='flex flex-wrap gap-4'>
                        <p className='text-4xl font-bold'>5.0</p>
                        <span className='flex mt-2 flex-wrap text-yellow-400'>
                            <IoStar size={25} />
                            <IoStar size={25} />
                            <IoStar size={25} />
                            <IoStar size={25} />
                            <IoStar size={25} />
                        </span>
                    </div>
                    <p className='text-start text-gray-500'>Based on <span className='font-bold text-black'>187</span> Reviews</p>

                </div>
            </div>
        </div>
    )
}
