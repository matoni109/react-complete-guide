import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const [enteredExpenses, setNewExpense] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  // const expenses = ;

  // const saveExpenseDateHandler = (oldExpenseData, newDataObject) => {
  // my code
  // // copy array / state
  // const expenseData = [...oldExpenseData];
  // // add new object to arr
  // expenseData.unshift(newDataObject);
  // //
  // // set new state
  // setNewExpense(expenseData);
  //
  // };

  const addExpenseHandler = (expense) => {
    console.log("In App.JS");
    // console.log(expense);
    // saveExpenseDateHandler(enteredExpenses, expense);
    // console.log(enteredExpenses);
    setNewExpense((prevExpenses) => {
      // add expense to existing arr
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={enteredExpenses} />
    </div>
  );
}

export default App;
