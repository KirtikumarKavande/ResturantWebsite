import React from "react";
import "./Meal.css";

const Meal = () => {
  const MenuCardData = [
    {
      menu: "Sushi",
      Description: "Finnest fish and veggies",
      Price: "$22.33",
    },
    {
      menu: "Schnitzel",
      Description: "Agerman Specility",
      Price: "$16.50",
    },
    {
      menu: "Berbucue Burger",
      Description: "American raw meat",
      Price: "$12.99",
    },
    {
      menu: "Green Bowl",
      Description: "Healthy and Green",
      Price: "$34.23",
    },
  ];

  return (
    <div className="mealContainer">
      <div className="menuList">
        {MenuCardData.map((item) => {
          return (
            <>
              <div className="menuName">{item.menu}</div>
              <div className="menuDescription">{item.Description}</div>
              <div className="menuPrice">{item.Price}</div>
              <hr></hr>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
