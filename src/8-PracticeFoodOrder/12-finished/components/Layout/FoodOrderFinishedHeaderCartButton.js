import { useContext, useEffect, useState } from 'react';

import FoodOrderFinishedCartIcon from '../Cart/FoodOrderFinishedCartIcon';
import FoodOrderFinishedCartContext from '../../store/FoodOrderFinished-cart-context';
import classes from './FoodOrderFinishedHeaderCartButton.module.css';

const FoodOrderFinishedHeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(FoodOrderFinishedCartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <FoodOrderFinishedCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default FoodOrderFinishedHeaderCartButton;
