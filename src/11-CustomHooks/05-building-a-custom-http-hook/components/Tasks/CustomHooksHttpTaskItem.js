import classes from './CustomHooksHttpTaskItem.module.css';

const CustomHooksHttpTaskItem = (props) => {
  return <li className={classes.task}>{props.children}</li>
};

export default CustomHooksHttpTaskItem;