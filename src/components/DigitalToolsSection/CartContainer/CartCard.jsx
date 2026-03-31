import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({ cartItem, cart, setCart }) => {
    const { title, price, billing, icon } = cartItem;
    function handleDelete() {
        setCart(
            cart.filter(item => item.id != cartItem.id)
        )
        toast.success(`${title} Removed From Cart.`);
    };

    return (
        <div className='cartCard bg-[#F9FAFC] p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-md hover:scale-101 transition-all duration-200 ease-in-out'>
            <div className='h-15 w-15 rounded-full border-2 border-[#F2F2F2] flex-center'>
                <img src={icon} alt="" className='w-8' />
            </div>

            <div className='flex-1'>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className='color-p font-medium'>${price} <span className=' text-xs'>/{billing}</span></p>
            </div>
            <button
                onClick={handleDelete}
                className='text-[#FF3980] font-bold cursor-pointer'><i className="fa-regular fa-trash-can"></i> Remove</button>
        </div>
    );
};

export default CartCard;