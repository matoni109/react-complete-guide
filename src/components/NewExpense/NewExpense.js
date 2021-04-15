import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    // expenseData object gets passed as an args to props going UP to parent
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    // execute the fuction from the props up to theparent !!
    // onAddExpese from App.JS
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* {passes saveExpenseDateHandler to the child element } */}
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
