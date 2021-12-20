import classes from './FoodOrderShoppingCartCard.module.css';

const FoodOrderShoppingCartCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderShoppingCartCard;