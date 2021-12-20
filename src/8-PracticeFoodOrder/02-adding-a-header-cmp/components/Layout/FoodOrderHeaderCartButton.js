import FoodOrderCartIcon from '../Cart/FoodOrderCartIcon';
import classes from './FoodOrderHeaderCartButton.module.css';

const FoodOrderHeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FoodOrderCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderHeaderCartButton;
