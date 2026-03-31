import React, { Suspense } from 'react';
import DTSectionHeader from './DTSectionHeader';
import { useState } from 'react';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import CartContainer from './CartContainer/CartContainer';


const DigitalToolsSection = ({ fetchProducts, cart, setCart }) => {
    const [tab, setTab] = useState('products');
    const productsPromise = fetchProducts();


    return (

        <section className='DigitalToolsSection container mx-auto my-10 min-h-[170vh] sm:my-30'>
            <DTSectionHeader tab={tab} setTab={setTab} cart={cart} />

            {tab === 'products' &&
                <Suspense fallback={<span className="loading loading-infinity loading-xl text-primary block mx-auto"></span>}>
                    <ProductsContainer
                        productsPromise={productsPromise}
                        cart={cart}
                        setCart={setCart}
                    />
                </Suspense>
            }


            {tab === 'cart' &&
                <Suspense fallback={<span className="loading loading-infinity loading-xl text-primary block mx-auto"></span>}>
                    <CartContainer
                    />
                </Suspense>
            }

        </section >
    );
};

export default DigitalToolsSection;