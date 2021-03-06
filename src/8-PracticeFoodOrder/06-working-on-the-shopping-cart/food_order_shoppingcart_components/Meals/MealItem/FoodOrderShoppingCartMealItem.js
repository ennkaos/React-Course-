import FoodOrderShoppingCartMealItemForm from './FoodOrderShoppingCartMealItemForm';
import classes from './FoodOrderShoppingCartMealItem.module.css';

const FoodOrderShoppingCartMealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodOrderShoppingCartMealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default FoodOrderShoppingCartMealItem;
