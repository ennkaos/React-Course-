import FoodOrderManageCartInput from '../../UI/FoodOrderManageCartInput';
import classes from './FoodOrderManageCartMealItemForm.module.css';

const FoodOrderManageCartMealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <FoodOrderManageCartInput
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

export default FoodOrderManageCartMealItemForm;
