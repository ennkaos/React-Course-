import classes from './FoodOrderFinishedCard.module.css';

const FoodOrderFinishedCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderFinishedCard;