import React from "react";

import Button from "react-bootstrap/esm/Button";

function hasRecord(meal) {
  return (
    meal.veggie.length !== 0 ||
    meal.fruits.length !== 0 ||
    meal.grains.length !== 0 ||
    meal.protein.length !== 0
  );
}

// function createFoodTableBody(foods) {
//   return foods.map((food, index) => {
//     console.log("food: ", food.name);
//     console.log("amount: ", food.amount);
//     return (
//       <tr key={index}>
//         <td>{index + 1}</td>
//         <td>{food.name}</td>
//         <td>{food.amount}</td>
//       </tr>
//     );
//   });
// }

function createFoodTable(foods, foodGroup) {
  //expecting foods is food groups array (foods.veggie)
  //[{ spinach: 100 }, { broccoli: 50 }];

  //ways
  //   console.log("keys", Object.keys(temp));

  //create 2d arrays from foods
  // [{"spinach": 100}, {"broccli": 100}]
  //food[][] = [[spinach, 100], [broccoli, 100]]
  //food[0][0] = spinach
  //food[0][1] = 100

  //food[1][0] = broccoli
  //food[1][1] = 50

  const names = [];
  const amount = foods.values();

  return foods.map((food, index) => {
    // console.log("names: ", names);
    // console.log("amount: ", amount);
    return (
      <tr className={`tabel-${foodGroup}`} key={index}>
        {/* <td>{index + 1}</td>
        <td>{food.name}</td>
        <td>{food.amount}</td> */}
      </tr>
    );
  });
}

// function createFoodTable(meals) {
//   let result;
//   result += createFoodTableEntries(meals.veggie, "veggie");
//   result += createFoodTableEntries(meals.carb, "carb");
//   return result;
// }

function FoodHistoryCard(props) {
  let breakfast = props.meal_data.breakfast;
  let lunch = props.meal_data.lunch;
  let dinner = props.meal_data.dinner;
  const temp = [{ spinach: 100 }, { brocolli: 100 }];
  return (
    <div className="history-table">
      <Button
        onClick={() => {
          console.log("meal_data: ", props.meal_data);
          console.log("breakfast: ", breakfast, hasRecord(breakfast));
          console.log("lunch: ", lunch, hasRecord(lunch));
          console.log("dinner: ", dinner, hasRecord(dinner));
        }}
      >
        Checking data
      </Button>
      {/* <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <h3 className="navbar-brand">Breakfast</h3>
      </nav> */}

      <div className="scrollable">
        <table className="table">
          {/* table header */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Food Name</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {/* {props.foods?.map((food, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{food.name}</td>
                  <td>{food.amount}</td>
                </tr>
              );
            })} */}
            {createFoodTable(breakfast.veggie, "veggie")}
            {createFoodTable(breakfast.grains, "grains")}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodHistoryCard;
