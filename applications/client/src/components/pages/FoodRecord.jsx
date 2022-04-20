import React, { useState, useEffect, Component, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Pie, getElementAtEvent, getDatasetAtEvent } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Dropdown from "react-bootstrap/Dropdown";
import FoodOptionsCard from "../FoodOptionsCard";
import Button from "react-bootstrap/esm/Button";

Chart.register(ArcElement);

// Testing data
let foods = [
  ["Broccoli", "Cabbage", "Spinach", "Kale", "Cauliflower", "Bok Choi"],
  [
    "Apple",
    "Orange",
    "Strawberry",
    "Watermelon",
    "Banana",
    "Grapes",
    "Grape Fruit",
    "Cherry",
  ],
  ["Rice", "Potato", "Sweet Potato", "Corn", "Noodles", "Pasta", "Bread"],
  ["Chicken", "Beef", "Turkey", "Eggs", "Tofu", "Tempeh", "Paneer", "Salmon"],
];

var globalVar = window.sessionStorage;

const FoodRecord = (props) => {
  // Hooks
  const [startDate, setStartDate] = React.useState(new Date());
  const [graph, setGraph] = React.useState({
    labels: [],
    data: [],
  });
  const [returnFoods, setReturnFoods] = React.useState({
    Veggie: [],
    Fruits: [],
    Carbs: [],
    Protein: [],
  });
  const [returnMealType, setReturnMealType] =
    React.useState("Choose your meal");
  const [foodGroupLabel, setFoodGroupLabel] = React.useState("");
  const [foodLabelIndex, setFoodLabelIndex] = React.useState(0);

  const chartRef = useRef();
  const graphData = [
    {
      label: "Veggie",
      value: 20,
    },
    {
      label: "Fruits",
      value: 20,
    },
    {
      label: "Carbs",
      value: 20,
    },
    {
      label: "Protein",
      value: 20,
    },
  ];

  function updateJSON(foodGroups, newFood, newFoodAmount) {
    if (newFoodAmount !== "") {
      setReturnFoods((prev) => {
        prev[foodGroups].push({
          name: newFood,
          amount: parseInt(newFoodAmount, 10),
        });
        console.log("prev: ", prev);
        return prev;
      });
    }
  }

  function updateMealType(event) {
    setReturnFoods({
      Veggie: [],
      Fruits: [],
      Carbs: [],
      Protein: [],
    });
    setReturnMealType(event.target.textContent);
  }

  useEffect(() => {
    const labels = [];
    const data = [];

    graphData?.map((v) => {
      labels.push(v?.label);
      data.push(v?.value);
    });

    setGraph({
      labels: labels,
      data: data,
    });
  }, []);

  const data = {
    labels: graph.labels,
    datasets: [
      {
        labels: "Food Type",
        data: graph.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <div className="row">
            <div className="col align-self-start">
              <h2>My Plate for: </h2>
            </div>

            {/* Date for recording */}
            <div className="col align-self-start">
              <DatePicker
                id="dateOfRecord"
                popperPlacement="bottom"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* DropDown for meal */}
            <div className="col align-self-start">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {returnMealType}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={updateMealType}>
                    Breakfast
                  </Dropdown.Item>
                  <Dropdown.Item onClick={updateMealType}>Lunch</Dropdown.Item>
                  <Dropdown.Item onClick={updateMealType}>Dinner</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="food-record-main">
          {/* <div
            style={{ height: "300px", width: "300px", marginLeft: "0 auto" }}
          >
            <Pie
              ref={chartRef}
              data={data}
              onClick={(event, element) => {
                const temp_index = getElementAtEvent(
                  chartRef.current,
                  event
                )[0];
                if (temp_index) {
                  const index = temp_index.index;
                  setFoodLabelIndex(index);
                  setFoodGroupLabel(graphData[index].label);
                }
              }}
            />
          </div> */}

          {/* New PIE chart */}
          <div
            style={{
              height: "500px",
              width: "500px",
              marginLeft: "0 auto",
            }}
          >
            <Pie
              data={data}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    onClick: () => {},
                  },
                },
              }}
              ref={chartRef}
              onClick={(event, element) => {
                const temp_index = getElementAtEvent(
                  chartRef.current,
                  event
                )[0];
                if (temp_index) {
                  const index = temp_index.index;
                  setFoodLabelIndex(index);
                  setFoodGroupLabel(graphData[index].label);
                }
              }}
            />
          </div>

          <FoodOptionsCard
            mealType={returnMealType}
            foodGroupName={foodGroupLabel}
            foods={foods[foodLabelIndex]}
            returnFoods={returnFoods}
            setReturnFoods={updateJSON}
          />
        </div>

        {/* record button */}
        <Button
          onClick={() => {
            // calorie calculation
            // 1. calculate veggies calorie

            // let calories = [300, 50, 400, 70];
            const body = {
              name: JSON.parse(globalVar.getItem("username")),
              date:
                startDate.getFullYear() +
                "-" +
                (startDate.getMonth() + 1) +
                "-" +
                startDate.getDate(),
              mealType: returnMealType,
              veggie: returnFoods.Veggie,
              fruits: returnFoods.Fruits,
              protein: returnFoods.Protein,
              grains: returnFoods.Carbs,
              // calories: calories;
            };
            console.log("body from record onclick: ", body);
            const settings = {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            };
            alert(body.name);
            console.log("record!");
            fetch("/api/foodRecord", settings)
              .then((res) => res.json())
              .then((body) => {
                alert(body.isSucceed);
                alert(body.message);
                if (body.isSucceed === true) {
                  // globalVar.setItem("username", JSON.stringify(body.username));
                  globalVar.setItem(
                    "returnFoods",
                    JSON.stringify(body.returnFoods)
                  );
                  //   alert("This is the branch");
                  globalVar.setItem(
                    "isSucceed",
                    JSON.stringify(body.isSucceed)
                  );
                  //alert('!!')
                  // window.location.href = "/FoodRecord";
                } else {
                  alert(body.message);
                }
                console.log(body);
              })
              .catch((err) => {
                alert(err);
                window.location.href = "/FoodRecord";
              });
          }}
        >
          Record!
        </Button>

        {/* History Button (Needed to be removed) */}
        {/* <Button
          onClick={() => {
            const body = {
              name: JSON.parse(globalVar.getItem("username")),
              date:
                startDate.getFullYear() +
                "-" +
                (startDate.getMonth() + 1) +
                "-" +
                startDate.getDate(),
            };
            alert(body.name);

            const settings = {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            };

            console.log("record!");
            fetch("/api/FoodHistory", settings)
              .then((res) => res.json())
              .then((body) => {
                console.log("History Triggered");
                alert(body);
                // alert(body.isSucceed);
                // alert(body.message);
                // alert(body.result)
                // if (body.isSucceed === true) {
                //   // globalVar.setItem("username", JSON.stringify(body.username));
                //   // globalVar.setItem(
                //   //     "returnFoods",
                //   //     JSON.stringify(body.returnFoods)
                //   // );
                //   // //   alert("This is the branch");
                //   // globalVar.setItem(
                //   //     "isSucceed",
                //   //     JSON.stringify(body.isSucceed)
                //   // );
                //   //alert('!!')
                //   // window.location.href = "/FoodRecord";
                // } else {
                //   alert(body.message);
                // }
                console.log(body);
              })
              .catch((err) => {
                alert(err);
                window.location.href = "/FoodRecord";
              });
          }}
        >
          History
        </Button> */}
      </div>
    </div>
  );
};
export default FoodRecord;
