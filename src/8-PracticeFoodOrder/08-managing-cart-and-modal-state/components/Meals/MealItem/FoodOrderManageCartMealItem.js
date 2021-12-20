import FoodOrderManageCartMealItemForm from './FoodOrderManageCartMealItemForm';
import classes from './FoodOrderManageCartMealItem.module.css';

const FoodOrderManageCartMealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodOrderManageCartMealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default FoodOrderManageCartMealItem;
