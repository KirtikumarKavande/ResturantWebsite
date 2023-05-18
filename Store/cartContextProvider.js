import React, { useState } from "react";
import CartContext from "./cartContext";

const CartContextProvider = (props) => {
  const [addItemToCart, setAddItemToCart] = useState([]);

  const addItemToCartHandler = (item) => {
    const index = cartContextObj.items.findIndex((object) => {
      return object.id === item.id;
    });

    console.log("index de de bhai", index);
    const existingCartItem = cartContextObj.items[index];
    console.log("existingCartItem", existingCartItem);
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + item.quantity,
      };
      console.log("cartoooo", updatedItem);
      const newUpdatedObj = [...cartContextObj.items];
      newUpdatedObj[index] = updatedItem;
      setAddItemToCart(newUpdatedObj);
    } else {
      setAddItemToCart([...addItemToCart, item]);
    }
  };

  // if (index > -1) {
  //   cartContextObj.items[index] = {
  //     ...item,
  //     quantity: cartContextObj.items[index].quantity + item.quantity,
  //   };
  // } else {
  //   setAddItemToCart([...addItemToCart, item]);
  // }
  const removeItemFromCartHandler = (id) => {
    const removeIndex = cartContextObj.items.findIndex((object) => {
      return object.id === id;
    });
    const existingCartItem = cartContextObj.items[removeIndex];
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      console.log("cartoooo", updatedItem);
      const newUpdatedObj = [...cartContextObj.items];
      newUpdatedObj[removeIndex] = updatedItem;
      setAddItemToCart(newUpdatedObj);
    }

    // cartContextObj.items[index]={...cartContextObj?.items[index],quantity:cartContextObj?.items[index]?.quantity-1}
    // setAddItemToCart(cartContextObj.items)
  };
  const cartContextObj = {
    items: addItemToCart,
    totalQuantity: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  console.log("context items", cartContextObj.items);
  return (
    <div>
      <CartContext.Provider value={cartContextObj}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
