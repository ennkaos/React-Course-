import classes from './FoodOrderCartReducerCard.module.css';

const FoodOrderCartReducerCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderCartReducerCard;