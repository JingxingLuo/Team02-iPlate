import React, { useState, useEffect, Component, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Pie, getElementAtEvent, getDatasetAtEvent } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Dropdown from "react-bootstrap/Dropdown";
import FoodOptionsCard from "../FoodOptionsCard";
Chart.register(ArcElement);

const FoodRecord = (props) => {
  // testing
  let veggies = [
    "Broccoli",
    "Cabbage",
    "Spinach",
    "Kale",
    "Cauliflower",
    "Bok Choi",
  ];

  const [startDate, setStartDate] = React.useState(new Date());

  const [graph, setGraph] = React.useState({
    labels: [],
    data: [],
  });

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
            <div class="col align-self-start">
              <h2>My Plate for: </h2>
            </div>
            {/* Date for recording */}
            <div class="col align-self-start">
              <DatePicker
                id="dateOfRecord"
                popperPlacement="bottom"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* DropDown for meal */}
            <div class="col align-self-start">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-light-example1"
                  variant="secondary"
                >
                  Choose your meal
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Breakfast
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Lunch</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Dinner</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="food-record-main">
          <div
            style={{ height: "300px", width: "300px", marginLeft: "0 auto" }}
          >
            <Pie
              ref={chartRef}
              data={data}
              onClick={(event, element) => {
                const index = getElementAtEvent(chartRef.current, event)[0]
                  .index;
                console.log(graphData[index].label);
              }}
            />
          </div>
          {/* here foodGroupName and foods should be default(placeholder) like Food Options & list of all foods in our db */}
          <FoodOptionsCard foodGroupName="Veggies" foods={veggies} />
        </div>
      </div>
    </div>
  );
};
export default FoodRecord;
