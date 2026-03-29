import React from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLinks />
                        </ul>
                    </div>
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text py-1'>
                        <h1 className="sm:text-4xl font-extrabold  bg-clip-text text-transparent">DigiTools</h1>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-8 font-semibold">
                        <NavLinks />
                    </ul>
                </div>

                <div className="navbar-end flex gap-2">
                    <button className="p-1 cursor-pointer"> <i class="fa-solid fa-cart-shopping"></i></button>
                    <div className='flex gap-1 flex-col sm:flex-row sm:gap-2'>
                        <button className="font-semibold cursor-pointer hover:bg-gray-200 px-2 rounded-xl transition duration-200">Login</button>
                        <button className="p-1 sm:py-3 sm:px-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white font-semibold cursor-pointer">Get Started</button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;