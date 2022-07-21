import React from "react";

import "./OpenCart.css";

function OpenCart({ cart, render }) {
  // const onDeleteItem = () => {
  //   // const index = cart.find(i => i.productName === productName)
  //   // const newItems = [...cart]
  //   // newItems.splice(index,1)
  //   // setCart(newItems)
  //   console.log(cart)
  // }


  if (!!cart.length>0) {
    return (
      <div className="OpenCart__container">
        <p className="Cart__title">Cart</p>
        {cart.map(render)}
        <button className="Checkout__button">Checkout</button>
      </div>
    );
  } else {
    return (
      <div className="OpenCart__container">
        <p className="Cart__title">Cart</p>
        <p className="Cart__empty">Your cart is empty.</p>
      </div>
    );
  }
}

export default OpenCart;
