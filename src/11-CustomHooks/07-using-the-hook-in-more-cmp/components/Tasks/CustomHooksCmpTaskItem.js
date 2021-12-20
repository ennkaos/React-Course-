import classes from './CustomHooksCmpTaskItem.module.css';

const CustomHooksCmpTaskItem = (props) => {
  return <li className={classes.task}>{props.children}</li>
};

export default CustomHooksCmpTaskItem;