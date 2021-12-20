import classes from './FoodOrderFormItemCard.module.css';

const FoodOrderFormItemCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderFormItemCard;