import { useContext } from 'react';

import FoodOrderFinishedMealItemForm from './FoodOrderFinishedMealItemForm';
import classes from './FoodOrderFinishedMealItem.module.css';
import FoodOrderFinishedCartContext from '../../../store/FoodOrderFinished-cart-context';

const FoodOrderFinishedMealItem = (props) => {
  const cartCtx = useContext(FoodOrderFinishedCartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
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
        <FoodOrderFinishedMealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodOrderFinishedMealItem;
