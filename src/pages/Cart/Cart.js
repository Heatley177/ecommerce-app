import React from 'react';
import './Cart.css';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  cleanCart,
} from '../../redux/CartSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';


function Cart() {
const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const shippingAndTax = total * 0.12;
  const finalTotal = total + shippingAndTax;

  const orders = [...cart];

  const dispatch = useDispatch();
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const placeOrder = (item) => {
    toast.success('Order Placed Successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        setTimeout(() => {
            navigate('/orders', {
                state:{
                    orders:orders,
                    finalTotal:finalTotal,
                }
            })
        }, 3500)
        setTimeout(() => {
            dispatch(cleanCart())
        }, 4000)
  };

  return (
    <>
      <Header />
      <div className='cart'>
        {/* Toastify */}
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />

        {/* LEFT SIDE */}
        <div className='cartLeft'>
          {/* IF CART IS EMPTY */}
          {cart.length === 0 ? (
            <h2 className='emptyCart'>Your cart is empty</h2>
          ) : (
            // IF CART HAS ITEMS
            cart.map((item, index) => (
              <div className='cartContainer' key={item.id}>
                {/* Image */}
                <div>
                  <img
                    src={item.image}
                    alt='Product'
                    style={{
                      width: 120,
                      height: 120,
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Title & Description */}
                <div className='cartDescription'>
                  <p style={{ fontWeight: 600 }}>
                    {item.title.length > 30
                      ? item.title.substr(0, 30) + '...'
                      : item.title}
                  </p>
                  <p style={{ paddingLeft: 15, marginTop: -5 }}>
                    {item.description.length > 60
                      ? item.description.substr(0, 60) + '...'
                      : item.description}
                  </p>
                  <p style={{ paddingLeft: 15, fontWeight: 400 }}>
                    {item.price} - each
                  </p>
                </div>

                {/* Buttons */}
                <div className='cartButtonContainer'>
                  <div className='cartButtons'>
                    <div>
                      <ArrowDownwardOutlinedIcon
                        style={{
                          height: 20,
                          width: 20,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleDecreaseQuantity(item)}
                      />
                    </div>
                    <div style={{ cursor: 'default' }}>{item.quantity}</div>
                    <div>
                      <ArrowUpwardOutlinedIcon
                        style={{
                          height: 20,
                          width: 20,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleIncreaseQuantity(item)}
                      />
                    </div>
                  </div>
                  <button
                    className='removeButton'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove Item
                  </button>
                  <p style={{ paddingLeft: 10, fontWeight: 500 }}>
                    ${item.price * item.quantity} - total
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className='cartRight'>
          {/* Location info and button */}
          <div className='cartLocationContainer'>
            <div className='cartLocation'>
              <LocationOnOutlinedIcon style={{ marginTop: 3 }} />
              <div className='cartLocationDescription'>
                <p className='cartLocationDescriptionText'>
                  Select Your Location
                </p>
                <p className='cartLocationDescriptionText'>
                  Select Your Location so we can find you!
                </p>
                <button className='cardRightButton'>Select Location</button>
              </div>
            </div>
            <div className='cartLocation'>
              <LocationOnOutlinedIcon style={{ marginTop: 3 }} />
              <div className='cartLocationDescription'>
                <p className='cartLocationDescriptionText'>
                  Select Your Saved Location
                </p>
                <button className='cardRightButton'>Choose Location</button>
              </div>
            </div>
          </div>

          {/* Coupon info and description */}
          <div className='cartCoupon'>
            <LocalActivityOutlinedIcon />
            <h4 className='couponText'>Select / Apply Coupon Code</h4>
          </div>
          <div className='cartCoupon'>
            <input
              className='couponInput'
              type='text'
              id='couponCode'
              placeholder='Apply Coupon Code'
            />
            <button className='couponSubmit'> Submit </button>
          </div>

          {/* Container for Checkout and Total */}
          <div className='cartCheckoutContainer'>
            <div className='cartCheckoutValue'>
              <h4>Total Price</h4>
              <h5> {Math.round(total * 100) / 100} </h5>
            </div>
            <div className='cartCheckoutValue'>
              <h4>Discount</h4>
              <h5> - </h5>
            </div>
            <div className='cartCheckoutValue'>
              <h4>Shipping and Tax</h4>
              <h5> {Math.round(shippingAndTax * 100) / 100} </h5>
            </div>
            <div className='cartCheckoutValue'>
              <h4>Final Price</h4>
              <h5> {Math.round(finalTotal * 100) / 100} </h5>
            </div>
            <button 
                className='cartCheckoutButton'
                onClick={placeOrder}
            >
            Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
