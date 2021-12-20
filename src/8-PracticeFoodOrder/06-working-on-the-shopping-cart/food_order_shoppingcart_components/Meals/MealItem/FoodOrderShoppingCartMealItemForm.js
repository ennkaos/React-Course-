import FoodOrderShoppingCartInput from '../../UI/FoodOrderShoppingCartInput';
import classes from './FoodOrderShoppingCartMealItemForm.module.css';

const FoodOrderShoppingCartMealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <FoodOrderShoppingCartInput
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

export default FoodOrderShoppingCartMealItemForm;
