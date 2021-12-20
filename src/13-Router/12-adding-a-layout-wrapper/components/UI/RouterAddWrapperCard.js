import classes from './RouterAddWrapperCard.module.css';

const RouterAddWrapperCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default RouterAddWrapperCard;
