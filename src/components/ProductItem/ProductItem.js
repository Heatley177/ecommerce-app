import React from 'react'
import './ProductItem.css'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/CartSlice';

function ProductItem({item}) {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
        const addItemToCart = (item) => {
            dispatch(addToCart(item));
        }
        const removeItemFromCart = (item) => {
            dispatch(removeFromCart(item));
        }

  return (
    <div className='productItem'>
        {/* Prod Image */}
        <img src={item.image} alt='products'
            style={{ width: 200, height: 200, objectFit: 'contain', padding: 5, marginLeft: 'auto', marginRight: 'auto' }}
        />

        {/* Prod Title */}
        <p>{ item.title.length > 30 ? item.title.substr(0,30) + '...' : item.title }</p>

        {/* Prod Description !!! Add '...' to end of product description if too long
        <p> { item.description.length > 60 ? item.description.substr(0,60) : item.description } </p> */}

        {/* Price */}
        <p>${item.price}</p>

        {/* Add To Cart Button */}
        { cart.some((x) => x.id === item.id ) ? (
            <button
                className='productItemButton' 
                onClick={() => removeItemFromCart(item)}            
            >
                <RemoveShoppingCartOutlinedIcon style={{ height: 18, width: 18, paddingRight: 5, marginTop: 4, marginBottom: -3 }} />
                Remove From Cart
            </button>
        ) : (
            <button
                className='productItemButton' 
                onClick={() => addItemToCart(item)}            
            >
                <AddShoppingCartOutlinedIcon style={{ height: 18, width: 18, paddingRight: 5, marginTop: 4, marginBottom: -3 }} />
                Add To Cart
            </button>
        )}

            

        {/* Buy Now Button */}
        <button className='productItemBuyNow' >
            <ShoppingCartCheckoutOutlinedIcon style={{ height: 20, width: 20, paddingRight: 5, marginTop: 1, marginBottom: -5 }} />
            Buy Now
        </button>

    </div>
  )
}
export default ProductItem