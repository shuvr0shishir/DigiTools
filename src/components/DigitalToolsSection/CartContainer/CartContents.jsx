import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';


const CartContents = ({ cart, setCart }) => {
    const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
    function handleDeleteAll() {
        setCart(cart = [])
        toast.error(`Everything Removed From Cart.`);
    };

    function handleCheckout() {
        setCart(cart = [])
        toast.info(`$${totalCost} Checkout Successfully.`);
    }

    return (
        <div className='space-y-6'>
            <div className='space-y-3'>
                {
                    cart.map((cartItem, index) =>
                        <CartCard
                            key={index}
                            cartItem={cartItem}
                            cart={cart}
                            setCart={setCart}
                        />
                    )
                }
            </div>
            <div className='flex justify-between'>
                <p className='color-p'>Total:
                    <span className='ml-1 color-h text-2xl font-bold'>
                        ${totalCost}
                    </span>
                </p>
                <button
                    onClick={handleDeleteAll}
                    className='text-[#FF3980] font-bold cursor-pointer'><i className="fa-regular fa-trash-can"></i> Remove All
                </button>

            </div>
            <button
                onClick={handleCheckout}
                className={`bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block py-3.75 rounded-full font-bold hover:brightness-140 transition-all duration-200 hover:shadow-xl mt-4 text-[16px]`}>
                Proceed to Checkout
            </button>

        </div>
    );
};

export default CartContents;