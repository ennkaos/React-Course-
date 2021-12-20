import FoodOrderCartReducerInput from '../../UI/FoodOrderCartReducerInput';
import classes from './FoodOrderCartReducerMealItemForm.module.css';

const FoodOrderCartReducerMealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <FoodOrderCartReducerInput
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default FoodOrderCartReducerMealItemForm;
