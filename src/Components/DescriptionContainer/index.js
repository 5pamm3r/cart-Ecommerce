import React, { useState } from "react";
import "./DescriptionContainer.css";

function DescriptionContainer({ count, setCount, children }) {

  // React.useEffect(()=>{
  //   document.getElementById('coso').textContent = cart.totalPrice;
  // }, [cart])

  

  const onRemoveItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onAddItem = () => {
    setCount(count + 1);
  };

  return (
    <div className="Description__container">
      <p className="Title">Sneaker Company</p>
      <p className="Subtitle" id="productName">
        Fall Limited Edition Sneakers
      </p>
      <p className="Detail">
        These low-profile Sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole. They'll withstand everything the
        weather can offer.
      </p>
      <div className="Price__container">
        <span className="Price">
          $
          <span className="Price" id="price">
            125.00
          </span>
        </span>
        <span className="Ofert">50%</span>
        <span className="Previus__price">$250.00</span>
      </div>
      <div className="AddToCart__container">
        <div className="AddRemove__buttons">
          <button className="Remove__item" onClick={onRemoveItem}>
            -
          </button>
          <span className="Count__item" id="countItem">
            {count}
          </span>
          <button className="Add__item" onClick={onAddItem}>
            +
          </button>
        </div>
        { children }
      </div>
    </div>
  );
}

export default DescriptionContainer;
