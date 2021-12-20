import classes from './CustomHooksAdjSection.module.css';

const CustomHooksAdjSection = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default CustomHooksAdjSection;
