import classes from './CustomHooksConfCard.module.css';

const CustomHooksConfCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CustomHooksConfCard;
