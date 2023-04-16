import React from 'react'
import './cart.css';
import CartContext from '../../context/cartContext';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx=useContext(CartContext)
  const selectedCart= (
  <ul>
 {cartCtx.items.map((item)=>(
    <CartItem   
    name={item.name}
    discription={item.discription}
    price={item.price}/>
    
 ))}
 </ul>
  )
 console.log(cartCtx.items)
  return (
    <div className='cart-main'>
      
        <li>{selectedCart}</li>
      
      <button>Generate Bill</button>
      <button onClick={props.onClose}>close</button>
    </div>
  )
}

export default Cart
