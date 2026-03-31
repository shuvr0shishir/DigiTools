import React, { use } from 'react';
import ProductCard from './ProductCard';

const ProductsContainer = ({ productsPromise, cart, setCart }) => {
    const productsData = use(productsPromise);

    return (
        <div className='ProductsContainer grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5'>
            {
                productsData.map(product =>
                    <ProductCard
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                    />)
            }
        </div>
    );
};

export default ProductsContainer;