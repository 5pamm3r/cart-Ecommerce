import React from "react";
import "./Header.css";
import iconMenu from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";

function Header({
  setOpenLinks,
  setOpenCart,
  children,
  openCart,
  openLinks,
  totalItems,
}) {
  const onOpenMenu = () => {
    setOpenLinks((prevState) => !prevState);
    if (!!openCart) {
      setOpenCart((prevState) => !prevState);
    }
  };
  const onOpenCart = () => {
    setOpenCart((prevState) => !prevState);
    if (!!openLinks) {
      setOpenLinks((prevState) => !prevState);
    }
  };

  return (
    <div className="Header">
      <figure className="Header__logo">
        <img
          src={iconMenu}
          alt="icon menu"
          className="Icon__burguer"
          onClick={onOpenMenu}
        />
        <img src={logo} alt="logo" className="Logo" />
      </figure>

      <ul className="Header__profile">
        <li className='CartTotalItems__container' onClick={onOpenCart}>
          <img
            src={iconCart}
            alt="icon cart"
            className="Icon__cart"
            
          />
          <div className="CartTotal__items">
            <span>{totalItems}</span>
          </div>
        </li>
        <li>
          <img
            src="https://randomuser.me/api/portraits/women/5.jpg"
            alt="profile logo"
            className="Icon__profile"
          />
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Header;
