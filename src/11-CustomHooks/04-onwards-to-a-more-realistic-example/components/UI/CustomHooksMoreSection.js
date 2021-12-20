import classes from './CustomHooksMoreSection.module.css';

const CustomHooksMoreSection = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default CustomHooksMoreSection;
