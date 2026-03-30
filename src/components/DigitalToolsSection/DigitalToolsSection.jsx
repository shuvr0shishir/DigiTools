import React from 'react';
import DTSectionHeader from './DTSectionHeader';
import { useState } from 'react';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import CartContainer from './CartContainer/CartContainer';


const DigitalToolsSection = () => {
    const [tab, setTab] = useState('products');

    return (
        <section className='DigitalToolsSection container mx-auto my-10 sm:my-30'>
            <DTSectionHeader tab={tab} setTab={setTab} />

            {tab === 'products' && <ProductsContainer />}
            {tab === 'cart' && <CartContainer />}

        </section>
    );
};

export default DigitalToolsSection;