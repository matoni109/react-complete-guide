import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(props) {
  // {
  //   console.log(props.expenses);
  // }
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
  return <Card className="expenses">{final}</Card>;
}
export default Expenses;
