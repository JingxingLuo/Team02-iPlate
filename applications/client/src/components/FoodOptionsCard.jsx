import React from "react";

let veggies = [
  "Broccoli",
  "Cabbage",
  "Spinach",
  "Kale",
  "Cauliflower",
  "Bok Choi",
];

function onClick(event) {
  console.log(event.target.textContent);
}

function createFoodOption(foodName) {
  return (
    <tr>
      <td onClick={onClick}>{foodName}</td>
    </tr>
  );
}

function FoodGroupCard(props) {
  return (
    <div className="food-options">
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <h3 className="navbar-brand">{props.foodGroupName}</h3>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      <div className="scrollable">
        <table className="table">
          <tbody>{props.foods.map(createFoodOption)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodGroupCard;
