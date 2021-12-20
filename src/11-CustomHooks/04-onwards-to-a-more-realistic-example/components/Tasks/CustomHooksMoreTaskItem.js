import classes from './CustomHooksMoreTaskItem.module.css';

const CustomHooksMoreTaskItem = (props) => {
  return <li className={classes.task}>{props.children}</li>
};

export default CustomHooksMoreTaskItem;