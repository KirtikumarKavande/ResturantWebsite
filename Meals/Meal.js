import React, { useContext, useRef, useState } from "react";
import cartContext from "../../Store/cartContext";

import "./Meal.css";

const Meal = () => {
  const ctx = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
  const MenuCardData = [
    {
      id: "1",
      menu: "Sushi",
      Description: "Finnest fish and veggies",
      Price: "22.33",
    },
    {
      id: "2",
      menu: "Schnitzel",
      Description: "Agerman Specility",
      Price: "16.50",
    },
    {
      id: "3",
      menu: "Berbucue Burger",
      Description: "American raw meat",
      Price: "12.99",
    },
    {
      id: "4",
      menu: "Green Bowl",
      Description: "Healthy and Green",
      Price: "34.23",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (item) => {
    ctx.addItem(item);
  };
  console.log("-----------------------------", ctx);

  function Quantity(e, item) {
    const amountVal = parseInt(e.target.value);
    item.quantity = amountVal;
  }

  return (
    <div className="mealContainer">
      <div className="menuList">
        {MenuCardData.map((item) => {
          return (
            <div key={item.id}>
              <form onSubmit={handleSubmit}>
                <div className="menuAndAddButtonContainer">
                  <div>
                    <div className="menuName">{item.menu}</div>
                    <div className="menuDescription">{item.Description}</div>
                    <div className="menuPrice">{item.Price}</div>
                  </div>
                  <div>
                    <div className="amountAndInput">
                      Quantity
                      <input
                        defaultValue={1}
                        type="number"
                        step={1}
                        min={1}
                        max={5}
                        id={item.id}
                        onChange={(e) => {
                          Quantity(e, item);
                        }}
                      />
                    </div>
                    <button
                      onClick={() => {
                        handleClick(item);
                      }}
                      className="addBtn"
                      type="submit"
                    >
                      +Add
                    </button>
                  </div>
                </div>
              </form>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
