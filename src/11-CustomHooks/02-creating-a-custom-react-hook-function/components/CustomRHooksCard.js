import classes from './CustomRHooksCard.module.css';

const CustomRHooksCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CustomRHooksCard;
