import React, { useState } from "react";

import "./ExpenseForm.css";
//
const ExpenseForm = (props) => {
  // single state
  // const [userInput, SetUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangedHandler = (event) => {
  //   // setEnteredTitle(event.target.value);
  //   // SetUserInput({
  //   //   // take a copy of userInput object
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });
  //   SetUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredTitle: event.target.value,
  //     };
  //   });
  // };

  // const dateChangedHandler = (event) => {
  //   SetUserInput({
  //     // take a copy of userInput object
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  // };

  // const amountChangedHandler = (event) => {
  //   SetUserInput({
  //     // take a copy of userInput object
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };
  //
  // using multi state below //
  //
  const [enteredTitled, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // state end //

  const submitHandler = (event) => {
    event.preventDefault();
    // expenseData object gets passed as an args to props going UP to parent
    const expenseData = {
      title: enteredTitled,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    //
    // execute the fuction from the parent !!
    //
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitled}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
