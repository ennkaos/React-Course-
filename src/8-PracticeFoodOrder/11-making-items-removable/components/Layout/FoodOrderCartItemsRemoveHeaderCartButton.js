import { useContext } from 'react';

import FoodOrderCartItemsRemoveCartIcon from '../Cart/FoodOrderCartItemsRemoveCartIcon';
import FoodOrderCartItemsRemoveCartContext from '../../store/FoodOrderCartItemsRemove-cart-context';
import classes from './FoodOrderCartItemsRemoveHeaderCartButton.module.css';

const FoodOrderCartItemsRemoveHeaderCartButton = (props) => {
  const cartCtx = useContext(FoodOrderCartItemsRemoveCartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FoodOrderCartItemsRemoveCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default FoodOrderCartItemsRemoveHeaderCartButton;
