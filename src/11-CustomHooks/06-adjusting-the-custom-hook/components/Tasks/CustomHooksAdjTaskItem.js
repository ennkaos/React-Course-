import classes from './CustomHooksAdjTaskItem.module.css';

const CustomHooksAdjTaskItem = (props) => {
  return <li className={classes.task}>{props.children}</li>
};

export default CustomHooksAdjTaskItem;