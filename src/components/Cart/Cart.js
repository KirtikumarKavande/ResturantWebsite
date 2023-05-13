import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";







const Cart = ({cartInvisible }) => {
  return (
  
      <Modal>
        <div>
          <div className="menuName">Sushi</div>
          <div className="sumOfAmount">
            <div className="text">Total Amount</div>
            <div className="amount">75</div>
          </div>
          <div className="btnContainer">
            <button className="btn1" onClick={cartInvisible}>Close</button>
            <button className="btn2">Order</button>
          </div>
        </div>
      </Modal>
   
  );
};
export default Cart;
