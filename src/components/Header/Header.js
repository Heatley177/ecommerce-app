import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/cart')
  }
  const navigateToHome = () => {
    navigate('/')
  }
  const navigateToOrders = () => {
    navigate('/orders')
  }

  return (

  <>
    <div className='header'>
      {/* Logo */}
      <div>
        <img 
          style={{ width: 100, height: 60, marginTop: 10 }}
          className='image'
          alt='Topo Designs Logo'
          src="https://topodesigns.com/cdn/shop/t/370/assets/topo-designs-logo-vertical.svg?v=16528767668584190231695138269"
          onClick={navigateToHome}
        />
      </div>
      
      {/* User */}
      <div className=''>
        <h4>Hello John </h4>
        <h4>Accounts & Lists</h4>
      </div>
      <div 
        onClick={navigateToOrders}
        style={{ cursor: 'pointer' }}
      >
        <h4>Returns </h4>
        <h4>& Orders</h4>
      </div>
      {/* Search Bar */}
      <div className='headerInputContainer'>
        <SearchOutlinedIcon style={{ marginLeft: 2, marginTop: 5 }} />
        <input className='headerInput' type='text' placeholder='Search Products'/>
      </div>
      {/* Shopping Cart */}
      <div 
      style={{ position: 'relative', marginRight: 20, cursor: 'pointer' }}
      onClick={navigateToCart}
      >
        <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
        <span
          style={{ 
            position: 'absolute',
            left: 16,
            right: 16,
            top: -4,
            backgroundColor: 'black',
            width: 14,
            height: 14, 
            borderRadius: 7, 
            fontSize: 12,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center' }}
        >
          {cart.length}
        </span>
      </div>
    </div>

    {/* Header Bottom */}
    <div className='headerBottom'>
      <MenuOutlinedIcon style={{ color: 'black'}} />
      <p className='menuItemText'>Buy</p>
      <p className='menuItemText'>Packs & Bags</p>
      <p className='menuItemText'>Men's</p>
      <p className='menuItemText'>Women's</p>
      <p className='menuItemText'>Accessories</p>
      <p className='menuItemText'>Sale</p>
    </div>
  </>
  )
}

export default Header