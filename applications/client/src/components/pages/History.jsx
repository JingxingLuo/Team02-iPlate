import React, { useRef } from "react";

// npm component
import DatePicker from "react-datepicker";
import { Pie } from "react-chartjs-2";

// self-built component
import Navbar from "../Navbar";
import HistoryFoodCard from "../HistoryFoodCard";

// bootstrap
import Button from "react-bootstrap/esm/Button";

// global variable
var globalVar = window.sessionStorage;

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
  const [records, setRecords] = React.useState([]);

  function hasRecord(meal) {
    return (
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

            {/* Search Button */}
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
                      updateRecords(body.res1);
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
                <Pie
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        onClick: () => {},
                      },
                    },
                  }}
                  data={data}
                />
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
