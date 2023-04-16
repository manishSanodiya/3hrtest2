import React from 'react'

const CartContext = React.createContext ({
    items: [],
    totalAmount: 0,
    // addItem: (lt) => {},
    // removeItem: (id) => {},
    // clearall: () => {},
    addItemTo:() =>{}
})

export default CartContext
