import { useContext } from 'react';

import FoodOrderCartItemsIcon from '../Cart/FoodOrderCartItemsIcon'
import FoodOrderCartItemsCartContext from '../../store/FoodOrderCartItems-cart-context';
import classes from './FoodOrderCartItemsHeaderButton.module.css';

const FoodOrderCartItemsHeaderButton = (props) => {
  const cartCtx = useContext(FoodOrderCartItemsCartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FoodOrderCartItemsIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default FoodOrderCartItemsHeaderButton;
