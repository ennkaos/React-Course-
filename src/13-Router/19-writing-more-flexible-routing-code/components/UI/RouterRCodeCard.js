import classes from './RouterRCodeCard.module.css';

const RouterRCodeCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterRCodeCard;
