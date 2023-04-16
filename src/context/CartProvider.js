import React, { useState } from 'react'
import CartContext from './cartContext';
import { useContext } from 'react';

const CartContextProvider = (props) => {
    const [items,setUpdateItem]=useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const addItemToCartHandler=(item)=>{
        setUpdateItem([...items,item])
    }
    
    
    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItemTo: addItemToCartHandler,
        // removeItem: removeItemFromCartHandler,
        // clearall: clearAllItemsFromCartHandler,
      };
  return (
    <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartContextProvider
