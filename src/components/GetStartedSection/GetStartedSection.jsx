import React from 'react';
import userImg from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'

const GetStartedSection = () => {
    return (
        <section className="GetStartedSection bg-[#F9FAFC]">
            <div className="container mx-auto text-center py-10 sm:py-30">

                <h2 className="color-h text-3xl sm:text-5xl font-extrabold mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="color-p mt-2">
                    Start using premium digital tools in minutes, not hours.
                </p>

                <div className="grid md:grid-cols-3 gap-7 mt-10">

                    {/* card 1 */}
                    <div className="relative bg-white rounded-2xl shadow-sm px-6 py-22 hover:shadow-md hover:scale-102 transition-all duration-300 ease-in-out ">

                        <div className="absolute h-10 w-10 gradient-bg text-white font-bold text-[14px] rounded-full top-4 right-4 flex-center">
                            01
                        </div>

                        <div className="p-5 w-fit mx-auto flex-center  rounded-full bg-purple-100 mb-4">
                            <img src={userImg} alt="" />
                        </div>

                        <h3 className="text-2xl font-bold color-h mb-4">
                            Create Account
                        </h3>
                        <p className="color-p">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    {/* card 2 */}
                    <div className="relative bg-white rounded-2xl shadow-sm px-6 py-22 hover:shadow-md hover:scale-102 transition-all duration-300 ease-in-out ">

                        <div className="absolute h-10 w-10 gradient-bg text-white font-bold text-[14px] rounded-full top-4 right-4 flex-center">
                            02
                        </div>

                        <div className="p-5 w-fit mx-auto flex-center  rounded-full bg-purple-100 mb-4">
                            <img src={packageImg} alt="" />
                        </div>

                        <h3 className="text-2xl font-bold color-h mb-4">
                            Choose Products
                        </h3>
                        <p className="color-p">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    {/* card 3 */}
                    <div className="relative bg-white rounded-2xl shadow-sm px-6 py-22 hover:shadow-md hover:scale-102 transition-all duration-300 ease-in-out ">

                        <div className="absolute h-10 w-10 gradient-bg text-white font-bold text-[14px] rounded-full top-4 right-4 flex-center">
                            03
                        </div>

                        <div className="p-5 w-fit mx-auto flex-center  rounded-full bg-purple-100 mb-4">
                            <img src={rocketImg} alt="" />
                        </div>

                        <h3 className="text-2xl font-bold color-h mb-4">
                            Start Creating
                        </h3>
                        <p className="color-p">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GetStartedSection;