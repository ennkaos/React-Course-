import FoodOrderIndividualMealCartIcon from '../Cart/FoodOrderIndividualMealCartIcon';
import classes from './FoodOrderIndividualMealHeaderCartButton.module.css';

const FoodOrderIndividualMealHeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FoodOrderIndividualMealCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderIndividualMealHeaderCartButton;
