import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import cartContext from "../../Store/cartContext";

const Cart = ({ cartInvisible }) => {
  const cartCtx = useContext(cartContext);

  let totalAmount = 0;

  cartCtx.items.map((item) => {
    <div key={item.id}>{(totalAmount = totalAmount + Number(item.Price))}</div>;
  });

  return (
    <Modal>
      <div>
        {cartCtx.items.map((item) => {
          return (
            <>
              <div className="cartItemBox" key={item.id}>
                <div className="menuNameInCart">{item.menu}</div>
                <div className="priceQuantityContainer">
                  <div className="menuPriceInCart">${item.Price}</div>
                  <div className="menuQuantityInCart">X{item.quantity}</div>
                </div>
              </div>
            </>
          );
        })}
        <div className="sumOfAmount">
          <div className="text">Total Amount</div>
          <div className="amount">${totalAmount}</div>
        </div>

        <div className="btnContainer">
          <button className="btn1" onClick={cartInvisible}>
            Close
          </button>
          {totalAmount!==0&&<button className="btn2">Order</button>}
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
