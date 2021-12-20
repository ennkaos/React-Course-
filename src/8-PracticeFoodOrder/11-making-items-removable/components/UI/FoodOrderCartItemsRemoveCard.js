import classes from './FoodOrderCartItemsRemoveCard.module.css';

const FoodOrderCartItemsRemoveCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderCartItemsRemoveCard;