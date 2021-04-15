import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  // {
  //   console.log(props.expenses);
  // }
  // set state store
  const [enteredYear, setEnteredYear] = useState("2020");
  // filter year object to send up to expense.js

  const getYearHandler = (year) => {
    console.log("In Expenses.JS");
    console.log(year);
    setEnteredYear(year);
  };
  //
  const expArr = props.expenses;

  const final = expArr.map((element, index) => {
    return (
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
        key={element.id}
      />
    );
  });
  // console.log(final);
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
