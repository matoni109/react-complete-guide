import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // set the state
  const [showForm, setFormState] = useState(true);

  // set state handler
  const changeStateHandler = () => {
    setFormState((showForm) => !showForm);
  };

  // save expense object
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

  if (showForm) {
    return (
      <div className="new-expense">
        <button onClick={changeStateHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      {/* {passes saveExpenseDateHandler to the child element } */}
      <ExpenseForm
        onToggle={changeStateHandler}
        onSaveExpenseData={saveExpenseDateHandler}
      />
    </div>
  );
};

export default NewExpense;
