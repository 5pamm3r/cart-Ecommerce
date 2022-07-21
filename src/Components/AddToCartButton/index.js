import React from "react";
import iconCart from "../../assets/images/icon-cart.svg";
import "./AddToCartButton.css";

function AddToCartButton({ setCart, count, cart }) {
  const onAddToCart = () => {
    if (count > 0) {
      const productName = document.querySelector("#productName").textContent;
      const price = document.querySelector("#price").textContent;
      const newItem = [...cart];
      newItem.push({
        productName: productName,
        price: price,
        count: count,
        totalPrice: price * count,
      });
      setCart(newItem);
    }
  };

  return (
    <div className="AddToCartButton">
      <button className="AddToCart" onClick={onAddToCart}>
        <span>
          <img src={iconCart} alt="cart" />
        </span>
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartButton;
