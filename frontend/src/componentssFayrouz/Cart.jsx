import React, { useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart({ initialCart = [], deleteCart }) {
    const [cart, setCart] = useState(initialCart);

const navigate=useNavigate()
    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item));
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();

    return (
        <div className="cart-container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) =>(
                        <tr key={item.id}>
                            <td>
                                <div className="item-details">
                                    <img src={item.imgurl} alt={item.name} className="item-image" />
                                    <div className="item-name">{item.name}</div>
                                </div>
                            </td>
                            <td className="item-info">
                                ${item.price}
                            </td>
                            <td className="item-info">
                                <div className="quantity-selector">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                        className="quantity-input"
                                    />
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </td>
                            <td className="item-info">
                                ${item.price * item.quantity}
                            </td>
                            <td>
                                <button className="delete-button" onClick={() => deleteCart(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
            <div className="coupon-section">
                <input type="text" placeholder="Coupon Code" className="coupon-input" />
                <button className="apply-coupon-button">Apply Coupon</button>
            </div>
            <div className="cart-total-section">
                <div className="cart-total">
                    <div>Subtotal: <span className="total-price">${subtotal.toFixed(2)}</span></div>
                    <div>Shipping: <span className="total-price">Free</span></div>
                    <div>Total: <span className="total-price">${subtotal.toFixed(2)}</span></div> <br />
                    <button className="checkout-button">Proceed to checkout</button>
                </div>
            </div>
            <div className="cart-actions">
                <button className="return-button" onClick={()=>navigate("/home")}> Return To Shop</button>
            </div>
        </div>
    );
}

export default Cart;