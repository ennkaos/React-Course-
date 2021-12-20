import FoodOrderMealsCartIcon from '../Cart/FoodOrderMealsCartIcon';
import classes from './FoodOrderMealsHeaderCartButton.module.css';

const FoodOrderMealsHeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FoodOrderMealsCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderMealsHeaderCartButton;
