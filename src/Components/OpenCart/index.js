import React from 'react'
import deleteImg from '../../assets/images/icon-delete.svg';
import itemImg from '../../assets/images/image-product-1-thumbnail.jpg';
import './OpenCart.css';

function OpenCart({ cart }) {
  
  if(!cart.productName){
    return (
      <div className='OpenCart__container'>
        <p>Empty</p>
      </div>
    )
  } else {
  return (
    <div className='OpenCart__container'>
      <p className='Cart__title'>Cart</p>      
      <div className='CartItemDetail__container'>
        <div className='ItemImg__container'>
          <img src={itemImg} alt=''/>
        </div>
        <div className='ItemDetail__container'>
          <p className='Product__name'>{cart.productName}</p>
          <span className='ProductPrice__detail'>${cart.price} x {cart.count} <b>${cart.totalPrice}</b></span>
        </div>
        <div className='ItemDelete__container'>
          <img src={deleteImg} alt='' />
        </div>
      </div>
      <button className='Checkout__button'>Checkout</button>
    </div>
  )
  }
}

export default OpenCart