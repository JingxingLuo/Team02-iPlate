import React from "react";
import Button from "react-bootstrap/esm/Button";

function FoodGroupCard(props) {
  return (
    <>
      {props.foodGroupName && (
        <div className="food-options">
          <nav
            id="navbar-example2"
            className="navbar navbar-light bg-light px-3"
          >
            <h3 className="navbar-brand">{props.foodGroupName}</h3>
          </nav>
          <div className="scrollable">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Food Name</th>
                  <th scope="col">Amount (g)</th>
                  <th scope="col">Record</th>
                </tr>
              </thead>
              <tbody>
                {props.foods.map((food, index) => {
                  return (
                    <tr key={index}>
                      <td>{food}</td>
                      <td>
                        <input id={index} />
                      </td>
                      <td>
                        <Button
                          //   onClick={(event) => {
                          //     //   push food: amount(value)
                          //     // console.log(
                          //     //   food,
                          //     //   document.getElementById(index).value
                          //     // );
                          //     const amount = document.getElementById(index).value;
                          //     if (amount !== "") {
                          //       console.log(
                          //         "pushing ",
                          //         food,
                          //         ": ",
                          //         amount,
                          //         " to ",
                          //         props.foodGroupLabel
                          //       );
                          //       switch (props.foodGroupLabel) {
                          //         case "Veggie":
                          //           props.returnValue.Veggie.push({
                          //             food: amount,
                          //           });
                          //           console.log(props.returnValue.Veggie);
                          //           break;
                          //         case "Fruits":
                          //           console.log(props.returnValue.Veggie);
                          //           break;
                          //         case "Carbs":
                          //           console.log(props.returnValue.Carbs);
                          //           break;
                          //         case "Protein":
                          //           console.log(props.returnValue.Protein);
                          //       }
                          //       //   console.log("returnFoods: ", props.returnFoods);
                          //     }
                          //   }}

                          //   onClick={() => {
                          //     props.setReturnFoods((prev) => {
                          //       prev.Veggie.push({ cabbage: 200 });
                          //       console.log(
                          //         "from food options card prev: ",
                          //         prev
                          //       );
                          //       console.log(
                          //         "from food options card return json: ",
                          //         props.returnFoods
                          //       );
                          //     });
                          //   }}

                          //   onClick={props.setReturnFoods}
                          onClick={() => {
                            if (props.mealType === "Choose your meal") {
                              console.log("Please choose a meal type!");
                              alert("Please choose a meal type!");
                            } else {
                              // console.log(props.mealType);
                              // alert(props.mealType);
                              const amount =
                                document.getElementById(index).value;
                              props.setReturnFoods(
                                props.foodGroupName,
                                food,
                                amount
                              );
                              console.log("meal type: ", props.mealType);
                              console.log(
                                "foodGroupName: ",
                                props.foodGroupName
                              );
                              console.log("food name: ", food);
                              console.log("food amount: ", amount);
                            }
                          }}
                        >
                          click me
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default FoodGroupCard;
