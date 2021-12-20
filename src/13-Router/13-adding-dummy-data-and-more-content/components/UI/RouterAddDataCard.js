import classes from './RouterAddDataCard.module.css';

const RouterAddDataCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterAddDataCard;
