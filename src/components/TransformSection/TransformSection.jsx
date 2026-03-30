import React from 'react';

const TransformSection = () => {
    return (
        <section className="StatsSection gradient-bg py-10 sm:py-30">

            <div className="container mx-auto text-center text-white space-y-10">
                <div className='space-y-4'>
                    <h2 className='font-extrabold text-3xl sm:text-5xl'>Ready to Transform Your Workflow?</h2>
                    <p>Join thousands of professionals who are already using Digitools to work smarter.
                        <br />
                        Start your free trial today.</p>
                </div>
                <div className='space-y-4'>
                    <div>
                        <button className='p-4 font-semibold bg-white text-purple-700 rounded-full mr-4 hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out '>Explore Products</button>

                        <button className='p-3.5 font-semibold bg-transparent text-white border-2 border-white rounded-full mr-4 hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out '>View Pricing</button>

                    </div>
                    <p>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>

        </section>
    );
};

export default TransformSection;