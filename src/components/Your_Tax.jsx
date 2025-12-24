import React from 'react';
import Google2 from "../assets/Google2.jpg"

const Your_Tax = () => {
    return (
        <section className='w-full mx-auto px-4 sm:px-6 lg:px-20'>
            <div className='flex justify-center flex-col sm:flex-row py-4 items-center sm:gap-3'>
                <span className='w-24 h-[2px] bg-orange-500'></span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
                    Your Tax, Our Expertise
                </h1>
                <span className='w-24 h-[2px] bg-orange-500'></span>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:gap-8 w-full'>
                {/* Left - Smaller */}
                <div className='text-black p-4 md:p-5 rounded-xl border border-[#D2601A] shadow-lg shadow-gray-400 w-full md:w-2/5 lg:w-[29%]'>
                    <div className='text-start'>
                        <h3 className='font-semibold text-lg mb-2'>Our Promise to Clients</h3>
                        <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl'>
                            The promptest response is <span className='text-[#D2601A]'> Guaranteed.</span>
                        </h2>
                    </div>
                    <p className='text-start pb-3 md:pb-5 mt-3 text-gray-500 text-sm sm:text-base'>
                        We understand that tax matters often take place at the last
                        minute near the deadline dates. Taxaccolega can still accommodate
                        you even at short notice. Nevertheless, this haste, our top-rated
                        tax experts can still outdo and save handsome sums of money for you
                    </p>
                </div>

                {/* Right - Larger */}
                <div className='text-black p-4 md:p-6 rounded-xl border border-[#D2601A] shadow-lg shadow-gray-400 w-full md:w-3/5 lg:w-3/5'>
                    <h2 className='text-2xl md:text-3xl text-start font-semibold mb-5'>Get in Touch</h2>
                    <div className='text-start space-y-4 md:space-y-6 mb-5 md:mb-7'>
                        <p className='text-gray-500 text-sm sm:text-base md:text-[15px] lg:text-base'>
                            Tax returns, financial strategies, bookkeeping… this all can seem quite
                            intimidating, but we assure you that you don't have to navigate it alone.
                            We commit to giving you peace of mind by bringing clarity to complexity.
                        </p>
                        <p className='text-gray-500 text-sm sm:text-base md:text-[15px] lg:text-base'>
                            <span className='font-bold'>What's next? </span> Get in touch for a free, no-obligation consultation – no
                            pressure, just real, actionable guidance and let us take the tax stress
                            off your shoulders.
                        </p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-3 py-4 mb-5'>
                        <span className='font-semibold cursor-pointer text-[#1D3C45] text-sm sm:text-base text-start'>020 8127 0728</span>
                        <span className='font-semibold cursor-pointer text-[#1D3C45] text-sm sm:text-base text-start'>info@taxaccolega.co.uk</span>
                        <span className='font-semibold cursor-pointer text-[#1D3C45] text-sm sm:text-base text-start'>074 7117 0484</span>
                    </div>

                    <div className='flex flex-wrap justify-between items-center gap-4'>
                        <button className='border py-2 px-6 font-semibold text-white cursor-pointer bg-[#1D3C45] hover:bg-[#D2601A] transition duration-200 text-sm sm:text-base rounded-4xl w-full sm:w-auto'>
                            Get In Touch
                        </button>
                        <span className='w-full sm:w-auto flex justify-center'>
                            <img className='w-48 max-w-full' src={Google2} alt="Google Reviews" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Your_Tax;