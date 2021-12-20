import classes from './RouterQParamsCard.module.css';

const RouterQParamsCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterQParamsCard;
