import React from "react";
import './Header.css'
import Cart from '../Images/cart_logo.png'
import headerMeal from '../Images/headerMeal.png'

const Header = () => {
  return (
    <div>
      <div className="header_title">
        <label>FoodPark</label>
        <div className="cart">
          <span><img src={Cart} alt="logo"/></span>
          <span className="cartText">Your Cart</span>
          <span className="cartCount">3</span>
        </div>
      </div>
      <div className="headerMealImg">
      <img src={headerMeal} alt="img" />
      </div>
    </div>
  );
};

export default Header;
