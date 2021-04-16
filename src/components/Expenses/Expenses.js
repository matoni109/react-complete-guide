import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");
  // filter year object to send up to expense.js

  const getYearHandler = (year) => {
    console.log("In Expenses.JS");
    setEnteredYear(year);
  };
  //
  const expArr = props.items;

  const final = expArr
    .filter(
      (thisYear) => enteredYear === thisYear.date.getFullYear().toString()
    )
    .map((element) => {
      return (
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
          key={element.id}
        />
      );
    });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveYearData={getYearHandler}
          yearValue={enteredYear}
        />
        {final}
      </Card>
    </div>
  );
};
export default Expenses;
