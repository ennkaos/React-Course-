import classes from './CustomClassStartUser.module.css';

const CustomClassStartUser = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default CustomClassStartUser;
