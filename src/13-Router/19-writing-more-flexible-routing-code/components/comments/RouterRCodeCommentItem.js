import classes from './RouterRCodeCommentItem.module.css';

const RouterRCodeCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterRCodeCommentItem;
