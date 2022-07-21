import React from 'react'
import deleteImg from "../../assets/images/icon-delete.svg";
import itemImg from "../../assets/images/image-product-1-thumbnail.jpg";

function ItemsCart({ productName, price, count, totalPrice, onDeleteItem}) {
  return (
    <div className="CartItemDetail__container">
          <div className="ItemImg__container">
            <img src={itemImg} alt="" />
          </div>
          <div className="ItemDetail__container">
            <p className="Product__name">{productName}</p>
            <span className="ProductPrice__detail">
              ${price} x {count} <b>${totalPrice}</b>
            </span>
          </div>
          <div className="ItemDelete__container">
            <img src={deleteImg} alt="" onClick={onDeleteItem} />
          </div>
        </div>
  )
}

export default ItemsCart