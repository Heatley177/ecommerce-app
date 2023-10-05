import React from 'react'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import './Orders.css'

function Orders() {
    const location = useLocation();
    console.log(location.state)


  return (
    <div className='ordersPage'>
        <Header />
        <div className='ordersBody'>
            <div>
                <h3>Your Orders</h3>
                {location.state.orders.map((order) => (
                    <div>
                        <div className='orderContainer'>
                            <img 
                                src={order.image} alt='Orders List'
                                style={{ width: 140, height: 140, objectFit: 'contain' }}
                            />
                            <div className='orderDescription'>
                                <p style={{ marginTop: 8 }} >{ order.title }</p>
                                <p style={{ marginTop: 8 }} >{ order.description.length > 80 ? order.description.substr(0,80) + '...' : order.description }</p>
                                <p style={{ marginTop: 8 }} >${ order.price * order.quantity }</p>
                            </div> 
                            <div className='orderButtons' >
                                <button>Return Product</button>
                                <button>Download Invoice</button>
                                <button>Rate Product</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </div>
  )
}

export default Orders