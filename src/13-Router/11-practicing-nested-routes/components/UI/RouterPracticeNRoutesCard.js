import classes from './RouterPracticeNRoutesCard.module.css';

const RouterPracticeNRoutesCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterPracticeNRoutesCard;
