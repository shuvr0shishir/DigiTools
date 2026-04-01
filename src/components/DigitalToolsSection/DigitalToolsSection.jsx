import React, { Suspense } from 'react';
import DTSectionHeader from './DTSectionHeader';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import CartContainer from './CartContainer/CartContainer';


const DigitalToolsSection = ({ fetchProducts, cart, setCart, tab, setTab }) => {
    const productsPromise = fetchProducts();

    return (

        <section className='DigitalToolsSection container mx-auto my-10  sm:my-30'>
            <DTSectionHeader tab={tab} setTab={setTab} cart={cart} />

            {tab === 'products' &&
                <Suspense fallback={<span className="loading loading-infinity loading-xl text-primary block mx-auto min-h-[50vh]"></span>}>
                    <ProductsContainer
                        productsPromise={productsPromise}
                        cart={cart}
                        setCart={setCart}
                    />
                </Suspense>
            }


            {tab === 'cart' &&
                <CartContainer
                    cart={cart}
                    setCart={setCart}
                    setTab={setTab}
                />
            }

        </section >
    );
};

export default DigitalToolsSection;