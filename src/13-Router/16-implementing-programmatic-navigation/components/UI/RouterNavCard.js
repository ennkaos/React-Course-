import classes from './RouterNavCard.module.css';

const RouterNavCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterNavCard;
