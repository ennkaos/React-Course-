import FoodOrderAddModalInput from '../../UI/FoodOrderAddModalInput';
import classes from './FoodOrderAddModalMealItemForm.module.css';

const FoodOrderAddModalMealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <FoodOrderAddModalInput
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

export default FoodOrderAddModalMealItemForm;
