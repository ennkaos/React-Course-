import classes from './FoodOrderAddModalCard.module.css';

const FoodOrderAddModalCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderAddModalCard;