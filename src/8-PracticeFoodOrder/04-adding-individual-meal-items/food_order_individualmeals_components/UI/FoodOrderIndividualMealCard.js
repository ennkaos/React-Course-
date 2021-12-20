import classes from './FoodOrderIndividualMealCard.module.css';

const FoodOrderIndividualMealCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderIndividualMealCard;