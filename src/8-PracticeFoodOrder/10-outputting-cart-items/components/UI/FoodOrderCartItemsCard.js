import classes from './FoodOrderCartItemsCard.module.css';

const FoodOrderCartItemsCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderCartItemsCard;