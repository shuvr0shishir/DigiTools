import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <section className="Banner container mx-auto bg-base-100 my-5 sm:my-21.25">
            <div className="banner-contant flex justify-between items-center  flex-col sm:flex-row-reverse gap-4">
                <div className='banner-img text-center '>
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-md"
                    />
                </div>

                <div className='banner-txt space-y-4'>

                    {/* badge */}
                    <div className=' py-2 px-4 bg-[#E1E7FF] rounded-4xl w-fit hover:shadow hover:scale-102 transition-all duration-300 ease-in-out hover:brightness-110'>
                        <div className="flex gap-2 items-center">
                            {/* ripple dot */}
                            <div className="w-4 h-4 rounded-full bg-purple-400/30 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-purple-400/80 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-700"></div>
                                </div>
                            </div>

                            <p className='font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                        </div>
                    </div>

                    <h1 className="text-[#101727] text-4xl sm:text-[72px] font-extrabold">Supercharge Your<br></br>Digital Workflow</h1>

                    <p className="py-6 leading-9 text-[18px] text-[#627382]">
                        Access premium AI tools, design assets, templates, and productivity<br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products<br />
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 items-center">

                        <button className="px-6 py-3.5 rounded-full text-white font-semibold 
                                            bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                                            hover:brightness-140 transition-all duration-200 
                                            shadow-md hover:shadow-xl hover:scale-105 ">
                            Explore Products
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 rounded-full 
                                            border-2 border-purple-600 text-purple-600 font-semibold 
                                            hover:bg-purple-500 hover:text-white 
                                            transition-all duration-200 hover:scale-105 ">
                            <span className="text-lg"><i className="fa-solid fa-play"></i></span>

                            Watch Demo
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;