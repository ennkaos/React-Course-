import { useContext } from 'react';

import FoodOrderCartItemsRemoveMealItemForm from './FoodOrderCartItemsRemoveMealItemForm';
import classes from './FoodOrderCartItemsRemoveMealItem.module.css';
import FoodOrderCartItemsRemoveCartContext from '../../../store/FoodOrderCartItemsRemove-cart-context';

const FoodOrderCartItemsRemoveMealItem = (props) => {
  const cartCtx = useContext(FoodOrderCartItemsRemoveCartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodOrderCartItemsRemoveMealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodOrderCartItemsRemoveMealItem;
