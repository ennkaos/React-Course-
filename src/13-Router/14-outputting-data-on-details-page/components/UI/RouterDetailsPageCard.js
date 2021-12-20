import classes from './RouterDetailsPageCard.module.css';

const RouterDetailsPageCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterDetailsPageCard;
