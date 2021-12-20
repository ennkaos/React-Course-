import classes from './RouterFinishedCard.module.css';

const RouterFinishedCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterFinishedCard;
