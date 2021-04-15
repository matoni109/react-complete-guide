import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // set event handler logic
  const yearChangedHandler = (event) => {
    const yearData = {
      year: event.target.value,
    };
    // console.log(event.target.value);
    // setEnteredYear(event.target.value);
    // console.log(yearData);

    // props function to send up to expense
    props.onSaveYearData(yearData.year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangedHandler} value={props.yearValue}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
