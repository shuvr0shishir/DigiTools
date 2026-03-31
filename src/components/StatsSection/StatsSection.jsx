import React from 'react';

const StatsSection = () => {
    return (
        <section className="StatsSection gradient-bg py-10">

            <div className="container mx-auto flex justify-between items-center text-center text-white">
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-5xl font-extrabold transition-all duration-300 ease-in-out hover:scale-107">50K+</h2>
                    <p className="mt-3 font-medium">Active Users</p>
                </div>

                <div className="w-px h-16 bg-white/30"></div>

                <div className="flex-1">
                    <h2 className="text-3xl sm:text-5xl font-extrabold transition-all duration-300 ease-in-out hover:scale-107">200+</h2>
                    <p className="mt-3 font-medium">Premium Tools</p>
                </div>

                <div className="w-px h-16 bg-white/30"></div>

                <div className="flex-1">
                    <h2 className="text-3xl sm:text-5xl font-extrabold transition-all duration-300 ease-in-out hover:scale-107">
                        4.9<i className="fa-regular fa-star text-3xl align-middle"></i></h2>
                    <p className="mt-3 font-medium">Rating</p>
                </div>
            </div>

        </section>
    );
};

export default StatsSection;