import React from 'react'
import iconCart from "../../assets/images/icon-cart.svg";
import './AddToCartButton.css'

function AddToCartButton({ setCart, count}) {
  const onAddToCart = () => {
    const productName = document.querySelector("#productName").textContent;
    const price = document.querySelector("#price").textContent;
    setCart({
      productName: productName,
      price: price,
      count: count,
      totalPrice: price * count,
    });
  };

  return (
    <div className='AddToCartButton'>
      <button className="AddToCart" onClick={onAddToCart}>
          <span>
            <img src={iconCart} alt="cart" />
          </span>
          Add to cart
        </button>
    </div>
  )
}

export default AddToCartButton