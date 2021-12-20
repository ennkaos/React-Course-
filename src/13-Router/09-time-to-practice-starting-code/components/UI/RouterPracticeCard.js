import classes from './RouterPracticeCard.module.css';

const RouterPracticeCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterPracticeCard;
