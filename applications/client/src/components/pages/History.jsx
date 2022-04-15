import React, { useRef } from "react";

// npm component
import DatePicker from "react-datepicker";
import Dropdown from "react-bootstrap/Dropdown";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// self-built component
import Navbar from "../Navbar";
import FoodHistoryCard from "../HistoryFoodCard";

// bootstrap
import Button from "react-bootstrap/esm/Button";

var globalVar = window.sessionStorage;

// Testing data - should get it from backend
let meal_data = {
  name: "Nini",
  date: "Date",
  breakfast: {
    veggie: [
      { name: "spinach", amount: 100 },
      { name: "broccoli", amount: 50 },
    ],
    fruits: [{ name: "strawberry", amount: 100 }],
    grains: [{ name: "brown rice", amount: 100 }],
    protein: [
      { name: "chicken", amount: 200 },
      { name: "egg", amount: 50 },
    ],
  },
  lunch: {
    veggie: [],
    fruits: [],
    grains: [],
    protein: [],
  },
  dinner: {
    veggie: [],
    fruits: [],
    grains: [],
    protein: [],
  },
};

let breakfast;
let lunch;
let dinner;

// Making pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // red: rgba(255, 99, 132, 0.2) -> protein
  // purple: rgba(54, 162, 235, 0.2) -> fruit
  // yellow: rgba(255, 206, 86, 0.2) -> carb
  // green: rgba(75, 192, 192, 0.2) -> veggie

  labels: ["Protein", "Fruits", "Carb", "Veggies"],
  datasets: [
    {
      label: "Food Groups",
      //   data percentage should got from backend
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function History() {
  // State hooks
  const [date, setDate] = React.useState(new Date());
  const [mealType, setMealType] = React.useState("Choose your meal");
  const [foodGroup, setFoodGroup] = React.useState("Foods");
  const [foodGroupIndex, setFoodGroupIndex] = React.useState(0);

  // Handle functions
  function updateMealType(event) {
    setMealType(event.target.textContent);
  }

  // Other
  const chartRef = useRef();

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="history-main">
        {/* Header: Date & meal selecting */}
        <div className="section-title history-header">
          <div className="row">
            <div className="col align-self-start">
              <h2>Search My Plate for: </h2>
            </div>

            {/* Date for recording */}
            <div className="col align-self-start">
              <DatePicker
                id="dateOfHistory"
                popperPlacement="bottom"
                selected={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </div>

            <div className="col align-self-start">
              <Button
                onClick={() => {
                  const body = {
                    name: JSON.parse(globalVar.getItem("username")),
                    date:
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate(),
                  };
                  console.log(body);

                  const settings = {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                  };

                  fetch("/api/FoodHistory", settings)
                    .then((res) => res.json())
                    .then((body) => {
                      console.log("History Triggered");
                      console.log(body);

                      //   body.res1.breakfast causing TypeError: Cannot read properties of null (reading 'breakfast')
                      if (body.res1.breakfast) breakfast = body.res1.breakfast;
                      if (body.res1.lunch) lunch = body.res1.lunch;
                      if (body.res1.dinner) dinner = body.res1.dinner;

                      console.log("breakfast: ", breakfast);
                      console.log("lunch: ", lunch);
                      console.log("dinner: ", dinner);
                    })
                    .catch((err) => {
                      alert(err);
                      window.location.href = "/FoodRecord";
                    });
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="history-content">
          {/* PIE chart */}
          <div
            style={{ height: "500px", width: "500px", marginLeft: "0 auto" }}
          >
            <Pie
              ref={chartRef}
              data={data}
              //   onClick={(event, element) => {
              //     const index = getElementAtEvent(chartRef.current, event)[0]
              //       .index;
              //     console.log("date: ", date);
              //     console.log("meal type: ", mealType);
              //     if (mealType === "Choose your meal")
              //       setFoodGroup("Please choose meal type");
              //     else if (index >= 0 && index <= 3)
              //       setFoodGroup(data.labels[index]);
              //   }}
            />
          </div>

          {/* Food History Display Table */}
          <FoodHistoryCard foodGroup={foodGroup} meal_data={meal_data} />
        </div>
      </div>
    </div>
  );
}

export default History;
