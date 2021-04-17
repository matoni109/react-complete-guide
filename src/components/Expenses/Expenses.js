import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");
  // filter year object to send up to expense.js

  const getYearHandler = (year) => {
    console.log("In Expenses.JS");
    setEnteredYear(year);
  };
  //
  // const expArr = props.items;
  //
  // const expensesContent = (array) => {
  //   const filterRes = array.filter(
  //     (thisYear) => enteredYear === thisYear.date.getFullYear().toString()
  //   );

  //   const final =
  //     filterRes.length === 0 ? (
  //       <p>No Expenses Found</p>
  //     ) : (
  //       filterRes.length > 0 &&
  //       filterRes.map((element) => {
  //         return (
  //           <ExpenseItem
  //             title={element.title}
  //             amount={element.amount}
  //             date={element.date}
  //             key={element.id}
  //           />
  //         );
  //       })
  //     );
  //   return final;
  // };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveYearData={getYearHandler}
          yearValue={enteredYear}
        />
        {/* {expensesContent(expArr)} */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
