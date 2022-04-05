import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

let veggies = [
  "Broccoli",
  "Cabbage",
  "Spinach",
  "Kale",
  "Cauliflower",
  "Bok Choi",
];

function createFoodOption(foodName) {
  return (
    <tr>
      <td>{foodName}</td>
      <td>
        <input />
      </td>
      <td>
        <Button
          onClick={(event) => {
            console.log(event.target.textContent);
          }}
        >
          click me
        </Button>
      </td>
    </tr>
  );
}

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
            {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={(ev) => {
              ev.preventDefault();
            }}
          >
            Search
          </button>
        </form> */}
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
              <tbody>{props.foods.map(createFoodOption)}</tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default FoodGroupCard;
