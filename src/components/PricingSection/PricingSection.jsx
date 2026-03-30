import React, { useState } from 'react';

const PricingSection = () => {
    const [selected, setSelected] = useState('Pro');
    console.log(selected);

    return (
        <section className='PricingSection container mx-auto my-10 sm:my-30'>
            <div className='SectionHeader space-y-4 text-center'>
                <h2 className='color-h text-3xl sm:text-5xl font-extrabold'>Simple, Transparent Pricing</h2>

                <p className='color-p'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className='PricingCardContainer grid md:grid-cols-3 gap-7 mt-10'>

                {/* card 1 */}
                <div
                    onMouseOver={() => setSelected('Starter')}
                    className={`card relative shadow-sm hover:shadow-xl hover:scale-102 transition-all ease-in-out  ${selected === 'Starter' ? 'gradient-bg text-white' : 'bg-[#F9FAFC] color-h'} `}>
                    <div className="card-body ">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Starter</h2>
                            <p className={`${selected === 'Starter' ? 'text-white' : 'color-p'} text-[16px]`}>Perfect for getting started</p>
                        </div>

                        <h2 className='text-4xl font-bold my-6'>$0<span className={`${selected === 'Starter' ? 'text-white' : 'color-p'} sm:text-xl font-normal`}>/Month</span></h2>

                        <ul className={`${selected === 'Starter' ? 'text-white' : 'color-p'} flex flex-col gap-2 text-[16px]`}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>

                        <div className="mt-auto">
                            <button className={`${selected === 'Starter' ? 'text-purple-700 bg-white' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} btn-block py-3.75 rounded-full font-bold hover:brightness-140 transition-all duration-200 hover:shadow-xl mt-6 text-[16px]`}>
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div
                    onMouseOver={() => setSelected('Pro')}
                    className={`card relative shadow-sm hover:shadow-xl hover:scale-102 transition-all ease-in-out  ${selected === 'Pro' ? 'gradient-bg text-white' : 'bg-[#F9FAFC] color-h'} `}>

                    {/* badge */}
                    <div className="absolute py-1.5 px-3 bg-[#FEF3C6] text-[#BB4D00] font-medium text-sm rounded-full -top-5 left-1/2 -translate-x-1/2 shadow-2xs">
                        Most Popular
                    </div>

                    <div className="card-body ">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Pro</h2>
                            <p className={`${selected === 'Pro' ? 'text-white' : 'color-p'} text-[16px]`}>Best for professionals</p>
                        </div>

                        <h2 className='text-4xl font-bold my-6'>$29<span className={`${selected === 'Pro' ? 'text-white' : 'color-p'} sm:text-xl font-normal`}>/Month</span></h2>

                        <ul className={`${selected === 'Pro' ? 'text-white' : 'color-p'} flex flex-col gap-2 text-[16px]`}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>

                        </ul>
                        <div className="mt-auto">
                            <button className={`${selected === 'Pro' ? 'text-purple-700 bg-white' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} btn-block py-3.75 rounded-full font-bold hover:brightness-140 transition-all duration-200 hover:shadow-xl mt-6 text-[16px]`}>
                                Explore Products
                            </button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div
                    onMouseOver={() => setSelected('Enterprise')}
                    className={`card relative shadow-sm hover:shadow-xl hover:scale-102 transition-all ease-in-out  ${selected === 'Enterprise' ? 'gradient-bg text-white' : 'bg-[#F9FAFC] color-h'} `}>

                    <div className="card-body ">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Enterprise</h2>
                            <p className={`${selected === 'Enterprise' ? 'text-white' : 'color-p'} text-[16px]`}>For teams and businesses</p>
                        </div>

                        <h2 className='text-4xl font-bold my-6'>$99<span className={`${selected === 'Enterprise' ? 'text-white' : 'color-p'} sm:text-xl font-normal`}>/Month</span></h2>

                        <ul className={`${selected === 'Enterprise' ? 'text-white' : 'color-p'} flex flex-col gap-2 text-[16px]`}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                        <div className="mt-auto">
                            <button className={`${selected === 'Enterprise' ? 'text-purple-700 bg-white' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} btn-block py-3.75 rounded-full font-bold hover:brightness-140 transition-all duration-200 hover:shadow-xl mt-6 text-[16px]`}>
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default PricingSection;