import classes from './RouterRouteTstCard.module.css';

const RouterRouteTstCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterRouteTstCard;
