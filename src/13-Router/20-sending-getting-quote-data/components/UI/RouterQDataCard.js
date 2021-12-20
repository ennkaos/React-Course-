import classes from './RouterQDataCard.module.css';

const RouterQDataCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterQDataCard;
