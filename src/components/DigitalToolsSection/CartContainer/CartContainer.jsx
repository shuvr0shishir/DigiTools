import React from 'react';
import CartContents from './CartContents';

const CartContainer = ({ cart, setCart }) => {
    return (

        <div className='CartContainer container mx-auto border-2 border-[#F2F2F2] color-h p-10 rounded-2xl'>

            <h2 className='text-2xl font-bold mb-6'>Your Cart</h2>

            {
                cart.length === 0 ?
                    <div className='text-center py-10 color-p'>
                        <p className='font-extrabold text-3xl mb-2'><i className="fa-solid fa-cart-shopping"></i> Cart is Empty.</p>
                        <p >Add Some Product To Cart.</p>
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