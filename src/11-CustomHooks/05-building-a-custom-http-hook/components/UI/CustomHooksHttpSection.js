import classes from './CustomHooksHttpSection.module.css';

const CustomHooksHttpSection = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default CustomHooksHttpSection;
