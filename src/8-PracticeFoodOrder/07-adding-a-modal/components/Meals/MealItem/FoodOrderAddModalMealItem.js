import FoodOrderAddModalMealItemForm from './FoodOrderAddModalMealItemForm';
import classes from './FoodOrderAddModalMealItem.module.css';

const FoodOrderAddModalMealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodOrderAddModalMealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default FoodOrderAddModalMealItem;
