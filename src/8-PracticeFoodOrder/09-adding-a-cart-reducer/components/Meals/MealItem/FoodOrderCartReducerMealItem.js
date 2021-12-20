import FoodOrderCartReducerMealItemForm from './FoodOrderCartReducerMealItemForm';
import classes from './FoodOrderCartReducerMealItem.module.css';

const FoodOrderCartReducerMealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodOrderCartReducerMealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default FoodOrderCartReducerMealItem;
