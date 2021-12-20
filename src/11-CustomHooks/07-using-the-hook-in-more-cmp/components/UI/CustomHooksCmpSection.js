import classes from './CustomHooksCmpSection.module.css';

const CustomHooksCmpSection = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default CustomHooksCmpSection;
