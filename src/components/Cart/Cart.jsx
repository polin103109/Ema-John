import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let quantity=0;
    for(const product of cart){
       product.quantity =  product.quantity || 1;
       quantity=quantity+ product.quantity;
}

  return (
    <div className="cart">
        <h2>Order Summery</h2>
        <p>Selected Items:{quantity}</p>
        <p>Total Price:</p>
        <p>Shipping:</p>
        <p>Tax:</p>
        <h6>Grand Total:</h6>
    </div>
  )
}
export default Cart;