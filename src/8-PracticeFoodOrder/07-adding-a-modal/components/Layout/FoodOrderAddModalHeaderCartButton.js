import FoodOrderAddModalCartIcon from '../Cart/FoodOrderAddModalCartIcon';
import classes from './FoodOrderAddModalHeaderCartButton.module.css';

const FoodOrderAddModalHeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FoodOrderAddModalCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderAddModalHeaderCartButton;
