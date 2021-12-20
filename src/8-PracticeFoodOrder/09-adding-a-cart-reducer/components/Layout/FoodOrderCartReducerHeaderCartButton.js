import { useContext } from 'react';

import FoodOrderCartReducerCartIcon from '../Cart/FoodOrderCartReducerCartIcon';
import FoodOrderCartReducerCartContext from '../../store/FoodOrderCartReducer-cart-context';
import classes from './FoodOrderCartReducerHeaderCartButton.module.css';

const FoodOrderCartReducerHeaderCartButton = (props) => {
  const cartCtx = useContext(FoodOrderCartReducerCartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FoodOrderCartReducerCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default FoodOrderCartReducerHeaderCartButton;
