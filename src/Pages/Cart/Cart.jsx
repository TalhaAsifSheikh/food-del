import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext); // Ensure removeFromCart is provided in the context

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list
          .filter(item => cartItems[item._id] > 0) // Filter out items not in the cart
          .map(item => {
            const quantity = cartItems[item._id]; // Get the quantity for the current item
            const totalPrice = item.price * quantity; // Calculate the total price

            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-items'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p> {/* Format price */}
                  <p>{quantity}</p> {/* Display quantity */}
                  <p>${totalPrice.toFixed(2)}</p> {/* Format total price */}
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p> {/* Remove button */}
                </div>
                <hr /> {/* Line separator */}
              </div>
            );
          })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p> {/* Fix: Call getTotalCartAmount as a function */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${(getTotalCartAmount()===0?0:getTotalCartAmount() + 2).toFixed(2)}</b> {/* Fix: Call getTotalCartAmount as a function */}
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
