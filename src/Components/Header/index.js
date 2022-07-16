import React from "react";
import "./Header.css";
import iconMenu from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";

function Header({ children, setOpenLinks, setOpenCart }) {
  const onClick = () => setOpenLinks(prevState => !prevState);
  const onOpenCart = () => setOpenCart(prevState => !prevState)

  return (
    <div className="Header">
      <figure className="Header__logo">
        <img
          src={iconMenu}
          alt="icon menu"
          className="Icon__burguer"
          onClick={onClick}
        />
        <img src={logo} alt="logo" className="Logo" />
      </figure>


      <ul className="Header__profile">
        <li>
          <img
            src={iconCart}
            alt="icon cart"
            className="Icon__cart"
            onClick={onOpenCart}
            />
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
