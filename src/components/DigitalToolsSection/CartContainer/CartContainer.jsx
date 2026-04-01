import React from 'react';
import CartContents from './CartContents';
import EmptyCartSvg from '../../../assets/undraw_empty-cart_574u.svg'

const CartContainer = ({ cart, setCart, setTab }) => {
    return (

        <div className='CartContainer container mx-auto border-2 border-[#F2F2F2] color-h p-10 rounded-2xl'>

            <h2 className='text-2xl font-bold mb-6'>Your Cart</h2>

            {
                cart.length === 0 ?
                    <div className='text-center py-10 color-p space-y-5'>
                        <div className='flex-center'>
                            <img src={EmptyCartSvg} alt="" className='max-w-52' />
                        </div>

                        <p className='font-extrabold text-3xl mb-2'>Cart is Empty.</p>
                        <p >Your cart is currently empty.<br></br>Discover premium tools and add into cart.</p>
                        <button
                            onClick={() => setTab("products")}
                            className={`bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:brightness-140 hover:scale-105`}
                        >Browse Products</button>
                    </div>
                    :
                    <CartContents
                        cart={cart}
                        setCart={setCart}
                    />
            }
        </div>

    );
};

export default CartContainer;