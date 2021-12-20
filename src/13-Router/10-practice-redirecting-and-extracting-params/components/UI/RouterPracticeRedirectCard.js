import classes from './RouterPracticeRedirectCard.module.css';

const RouterPracticeRedirectCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterPracticeRedirectCard;
