

const DTSectionHeader = ({ tab, setTab, cart }) => {


    return (
        <div className='SectionHeader space-y-4 mb-10 text-center'>
            <h2 className='color-h text-3xl sm:text-5xl font-extrabold'>Premium Digital Tools</h2>

            <p className='color-p'>
                Choose from our curated collection of premium digital products designed<br />
                to boost your productivity and creativity.
            </p>

            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full w-fit mx-auto font-bold">

                <button
                    onClick={() => setTab("products")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:brightness-140 hover:scale-105
                        ${tab === "products"
                            ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow"
                            : "text-gray-600"
                        }`
                    }
                >
                    Products
                </button>

                <button
                    onClick={() => setTab("cart")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:brightness-140 hover:scale-105
                        ${tab === "cart"
                            ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow"
                            : "text-gray-600"
                        }`
                    }
                >
                    Cart {cart.length > 0 && <span>({cart.length})</span>}

                </button>

            </div>
        </div>
    );
};

export default DTSectionHeader;