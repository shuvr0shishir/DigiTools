import React from 'react';
import ListIteam from './ListIteam';


const ProductCard = ({ product, cart, setCart }) => {
    const { title, badge, price, billing, icon, description, features } = product;

    function handleBuyNow() {
        setCart([...cart, product]);

    };
    return (
        <div className={`ProductsCard card relative hover:shadow-xl hover:scale-101 transition-all ease-in-out color-h border-2 border-[#F2F2F2] rounded-2xl bg-white`}>

            {/* badge */}
            <div className="bg-[#FEF3C6] text-[#BB4D00] absolute py-1.5 px-3  font-medium text-sm rounded-2xl top-3 right-3">
                {badge}
            </div>

            <div className="card-body space-y-3">
                <div className='h-15 w-15 rounded-full border-2 border-[#F2F2F2] flex-center'>
                    <img src={icon} alt="" className='w-8' />
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>

                <p className={`color-p text-[16px]`}>{description}</p>

                <h2 className='text-4xl font-bold'>${price}<span className={`color-p sm:text-xl font-normal`}>/{billing}</span></h2>

                <ul className={`color-p flex flex-col gap-2 text-[16px]`}>
                    {
                        features.map((list, index) => <ListIteam key={index} list={list} />)
                    }
                </ul>

                <div className="mt-auto">
                    <button
                        onClick={handleBuyNow}
                        className={`bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block py-3.75 rounded-full font-bold hover:brightness-140 transition-all duration-200 hover:shadow-xl mt-4 text-[16px]`}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;