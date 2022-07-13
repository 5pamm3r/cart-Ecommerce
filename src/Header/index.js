import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
      <ul className='Header__links'>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className='Header__profile'>
        <li><img src='https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png' alt='cart logo' className='icon__cart' /></li>
        <li><img src='https://randomuser.me/api/portraits/women/5.jpg' alt='profile logo' className='icon__profile'/></li>
      </ul>
    </div>
  )
}

export default Header