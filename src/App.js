import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import CartProvider from "./context/CartProvider";
import CartContextProvider from "./context/CartProvider";

function App() {
  const [show, setShow] = useState(false);
  const onShowCart = () => {
    console.log("cart button");
    setShow(true);
  };
  const onCloseCart = () => {
    setShow(false);
  };
  // let medicine = {
  //   sno: sno,
  //   name: name,
  //   price: price,
  //   discription: discription,
  //   quantity: 20
  // }
  return (
    <CartContextProvider>
    <div className="main-div">
      {show && <Cart onClose={onCloseCart} />}
      <Header onShow={onShowCart} />

      <Form />
      
    </div>
    </CartContextProvider>
    
  );
}

export default App;
