import classes from './FoodOrderManageCartCard.module.css';

const FoodOrderManageCartCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default FoodOrderManageCartCard;