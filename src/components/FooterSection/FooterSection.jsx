import React from 'react';

const FooterSection = () => {
    return (
        <div className="container mx-auto pb-8 pt-10 sm:pt-30 text-white">
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-6 gap-8">

                <div className="col-span-2">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">DigiTools</h2>
                    <p>
                        Premium digital tools for creators,<br />
                        professionals, and businesses.<br />
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="font-medium mb-4">Product</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white/60">Features</a></li>
                        <li><a href="#" className="hover:text-white/60">Pricing</a></li>
                        <li><a href="#" className="hover:text-white/60">Templates</a></li>
                        <li><a href="#" className="hover:text-white/60">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-medium mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white/60">About</a></li>
                        <li><a href="#" className="hover:text-white/60">Blog</a></li>
                        <li><a href="#" className="hover:text-white/60">Careers</a></li>
                        <li><a href="#" className="hover:text-white/60">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-medium mb-4">Resources</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-white/60">Documentation</a></li>
                        <li><a href="#" className="hover:text-white/60">Help Center</a></li>
                        <li><a href="#" className="hover:text-white/60">Community</a></li>
                        <li><a href="#" className="hover:text-white/60">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 ">
                    <p> Social Links</p>

                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 flex-center rounded-full bg-gray-800 hover:bg-gray-700">
                            <i className="fa-brands fa-square-facebook text-xl"></i>
                        </a>
                        <a href="#" className="w-10 h-10 flex-center rounded-full bg-gray-800 hover:bg-gray-700">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="w-10 h-10 flex-center rounded-full bg-gray-800 hover:bg-gray-700">
                            <i className="fa-brands fa-x-twitter text-xl"></i>
                        </a>
                    </div>
                </div>

            </div>


            <div className="border-t border-gray-700 mt-15 sm:mt-20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">

                <p className='text-[#fafafacb]'>© 2026 Digitools. All rights reserved.</p>

                <div className="flex gap-6 mt-3 md:mt-0 text-[#fafafacb]">
                    <a href="#" className="hover:text-white/50">Privacy Policy</a>
                    <a href="#" className="hover:text-white/50">Terms of Service</a>
                    <a href="#" className="hover:text-white/50">Cookies</a>
                </div>

            </div>

        </div>
    )
};

export default FooterSection;