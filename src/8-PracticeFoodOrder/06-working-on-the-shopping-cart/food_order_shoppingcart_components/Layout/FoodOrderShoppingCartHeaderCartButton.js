import FoodOrderShoppingCartIcon from '../Cart/FoodOrderShoppingCartIcon'
import classes from './FoodOrderShoppingCartHeaderCartButton.module.css';

const FoodOrderShoppingCartHeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FoodOrderShoppingCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderShoppingCartHeaderCartButton;
