import React from "react";

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExspenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //
  // const [title, setTitle] = useState(props.title);
  // // const expenseDate = new Date(2021, 2, 27);
  // // const expenseTitle = "Car Insurance";
  // // const expenseAmount = 294.67;
  // const clickedHandler = () => {
  //   console.log("yay");
  //   setTitle("updated");
  // };

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toLocaleDateString()}</div> */}

      <ExspenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickedHandler}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
