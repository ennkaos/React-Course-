import FoodOrderFormCartIcon from '../Cart/FoodOrderFormCartIcon';
import classes from './FoodOrderFormHeaderCartButton.module.css';

const FoodOrderFormHeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FoodOrderFormCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderFormHeaderCartButton;
