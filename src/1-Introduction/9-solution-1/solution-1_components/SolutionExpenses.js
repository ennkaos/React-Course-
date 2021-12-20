import SolutionExpenseItem from './SolutionExpenseItem';
import './SolutionExpenses.css';

function SolutionExpenses(props) {
  return (
    <div className="expenses">
      <SolutionExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <SolutionExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <SolutionExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <SolutionExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default SolutionExpenses;
