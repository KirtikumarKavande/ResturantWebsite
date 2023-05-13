import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import ResturantSummery from "./components/ResturantSummery/ResturantSummery";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";

const App = () => {
  const[isShowCart,setIsShowCCart]=useState(false)

const cartVisible=()=>{
  setIsShowCCart(true)
}
const cartInvisible=()=>{
  setIsShowCCart(false)
}

  return (
    <>
      <Header cartVisible={cartVisible} />
      {
        isShowCart &&<Cart cartInvisible={cartInvisible}  />
      }
      
      <ResturantSummery />
      <Meal />
    </>
  );
};

export default App;
