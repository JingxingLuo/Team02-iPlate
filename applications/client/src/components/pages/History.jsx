import React, { useRef } from "react";

// npm component
import DatePicker from "react-datepicker";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// self-built component
import Navbar from "../Navbar";
import HistoryFoodCard from "../HistoryFoodCard";

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

// Making pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

// for pie, data should get from backend
export const data = {
  // red: rgba(255, 99, 132, 0.2) -> protein
  // purple: rgba(153, 102, 255, 0.2) -> fruit
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
  const [searchClicked, setSearchClicked] = React.useState(false);
  const [breakfast, setBreakfast] = React.useState({
    veggie: [],
    fruits: [],
    grains: [],
    protein: [],
  });
  const [lunch, setLunch] = React.useState({
    veggie: [],
    fruits: [],
    grains: [],
    protein: [],
  });
  const [dinner, setDinner] = React.useState({
    veggie: [],
    fruits: [],
    grains: [],
    protein: [],
  });
  const [records, setRecords] = React.useState([]);

  function hasRecord(meal) {
    return (
      //   searchClicked &&
      meal.veggie.length !== 0 ||
      meal.fruits.length !== 0 ||
      meal.grains.length !== 0 ||
      meal.protein.length !== 0
    );
  }

  function updateRecords(data) {
    setRecords([]);

    // update records hook (only add when has record)
    if (hasRecord(data.breakfast)) {
      console.log("Has Breakfast data!");
      setRecords((prevRecords) => {
        return [...prevRecords, data.breakfast];
      });
    }

    if (hasRecord(data.lunch)) {
      console.log("Has Lunch data!");
      setRecords((prevRecords) => {
        return [...prevRecords, data.lunch];
      });
    }

    if (hasRecord(data.dinner)) {
      console.log("Has Dinner data!");
      setRecords((prevRecords) => {
        return [...prevRecords, data.dinner];
      });
    }
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* History Main Body */}
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
                  setSearchClicked(true);
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
                      console.log(
                        "History Triggered - Below is the Data from Backend",
                        searchClicked
                      );
                      console.log("body: ", body);
                      updateRecords(body.res1);
                      //   body.res1.breakfast causing TypeError: Cannot read properties of null (reading 'breakfast')
                      //   if (body.res1.breakfast)
                      //     setBreakfast((prev) => {
                      //       console.log("Inside setBreakfast");
                      //       console.log("prev", prev);
                      //       prev.veggie = new Array(body.res1.breakfast.veggie);
                      //       prev.fruits = new Array(body.res1.breakfast.fruits);
                      //       prev.grains = new Array(body.res1.breakfast.grains);
                      //       prev.protein = new Array(body.res1.breakfast.protein);
                      //       //   prev.veggie.splice(
                      //       //     0,
                      //       //     prev.veggie.length,
                      //       //     ...body.res1.breakfast.veggie
                      //       //   );
                      //       //   prev.fruits.splice(
                      //       //     0,
                      //       //     prev.fruits.length,
                      //       //     ...body.res1.breakfast.veggie
                      //       //   );
                      //       //   prev.grains.splice(
                      //       //     0,
                      //       //     prev.grains.length,
                      //       //     ...body.res1.breakfast.veggie
                      //       //   );
                      //       //   prev.protein.splice(
                      //       //     0,
                      //       //     prev.protein.length,
                      //       //     ...body.res1.breakfast.veggie
                      //       //   );
                      //       return prev;
                      //     });
                      //   if (body.res1.lunch)
                      //     setLunch((prev) => {
                      //       prev.veggie.splice(
                      //         0,
                      //         prev.veggie.length,
                      //         ...body.res1.lunch.veggie
                      //       );
                      //       prev.fruits.splice(
                      //         0,
                      //         prev.fruits.length,
                      //         ...body.res1.lunch.veggie
                      //       );
                      //       prev.grains.splice(
                      //         0,
                      //         prev.grains.length,
                      //         ...body.res1.lunch.veggie
                      //       );
                      //       prev.protein.splice(
                      //         0,
                      //         prev.protein.length,
                      //         ...body.res1.lunch.veggie
                      //       );
                      //     });
                      //   if (body.res1.dinner)
                      //     setDinner((prev) => {
                      //       prev.veggie.splice(
                      //         0,
                      //         prev.veggie.length,
                      //         ...body.res1.dinner.veggie
                      //       );
                      //       prev.fruits.splice(
                      //         0,
                      //         prev.fruits.length,
                      //         ...body.res1.dinner.veggie
                      //       );
                      //       prev.grains.splice(
                      //         0,
                      //         prev.grains.length,
                      //         ...body.res1.dinner.veggie
                      //       );
                      //       prev.protein.splice(
                      //         0,
                      //         prev.protein.length,
                      //         ...body.res1.dinner.veggie
                      //       );
                      //     });

                      //   console.log(
                      //     "breakfast: ",
                      //     breakfast,
                      //     hasRecord(breakfast)
                      //   );
                      //   console.log("lunch: ", lunch, hasRecord(lunch));
                      //   console.log("dinner: ", dinner, hasRecord(dinner));
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
        {/* display */}

        {records.map((record, index) => {
          return (
            <div className="history-content">
              {/* PIE chart */}
              <div
                style={{
                  height: "500px",
                  width: "500px",
                  marginLeft: "0 auto",
                }}
              >
                <h3>{record.mealType}</h3>
                <Pie data={data} />
              </div>

              {/* Food History Display Table */}
              <HistoryFoodCard key={index} meal_data={record} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
