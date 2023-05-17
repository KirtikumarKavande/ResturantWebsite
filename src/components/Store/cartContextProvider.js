import React, { useState } from "react";
import CartContext from "./cartContext";

const CartContextProvider = (props) => {
  const [addItemToCart, setAddItemToCart] = useState([]);

  const addItemToCartHandler = (item) => {
    const index = cartContextObj.items.findIndex((object) => {
      return object.id === item.id;
    });

    console.log("index de de bhai",index)

    if(index>-1){
      
      cartContextObj.items[index]={...item,quantity:cartContextObj.items[index].quantity+item.quantity}
    }else{
      setAddItemToCart([...addItemToCart, item]);

    }

    // cartContextObj.items.map((myitem) => {
    //   if (myitem.id === item.id) {
    //     cartContextObj.items[index] = item;
    //   } else {
        // setAddItemToCart([...addItemToCart, item]);
    //   }
    // });

  };
  const removeItemFromCartHandler = (id) => {};
  const cartContextObj = {
    items: addItemToCart,
    totalQuantity: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <div>
      <CartContext.Provider value={cartContextObj}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
