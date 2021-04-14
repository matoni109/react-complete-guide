import "./ExpenseItem.css";
// this is a test
function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 27);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  const month = props.date.toLocaleString("en-AU", { month: "long" });
  const day = props.date.toLocaleString("en-AU", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/* <div>{props.date.toLocaleDateString()}</div> */}
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
