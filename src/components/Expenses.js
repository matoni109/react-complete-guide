import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  // {
  //   console.log(props.expenses);
  // }
  const expArr = props.expenses;

  const final = expArr.map((element, index) => {
    return (
      <div>
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
          key={element.id}
        />
      </div>
    );
  });
  // console.log(final);
  return <div className="expenses">{final}</div>;
}
export default Expenses;
