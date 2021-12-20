import classes from './CustomHooksStartCard.module.css';

const CustomHooksStartCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CustomHooksStartCard;
