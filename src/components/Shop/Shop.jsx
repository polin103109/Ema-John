import React, { createFactory, useEffect, useState } from 'react';
import { AddToDb, getshoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    //data load
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getshoppingCart();
        const savedCart= [];
        for(const id in storedCart){
            const addedProduct = 
            products.find(product =>product.id === id);
            if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
            }
            // console.log('added product',addedProduct)
        }
        setCart(savedCart);

    },[products])
    const handleAddToCart = (product) =>{
    //    cart.push(product);
    const newCart = [...cart,product];
    setCart(newCart);
    AddToDb(Product.id)

    }
    return (
        <div className='shop-container'>
           <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product = {product}
                        handleAddToCart={handleAddToCart }
                        >
                    </Product>)
                }
            </div> 
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;