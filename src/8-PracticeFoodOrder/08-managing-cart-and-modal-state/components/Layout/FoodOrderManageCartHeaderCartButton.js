import FoodOrderManageCartIcon from '../Cart/FoodOrderManageCartIcon';
import classes from './FoodOrderManageCartHeaderCartButton.module.css';

const FoodOrderManageCartHeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FoodOrderManageCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default FoodOrderManageCartHeaderCartButton;
