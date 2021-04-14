import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  // {
  //   console.log(props.expenses);
  // }
  const expArr = props.expenses;

  const final = expArr.map((element, index) => {
    return (
      <div className="expenses">
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
  return <div>{final}</div>;
}
export default Expenses;
