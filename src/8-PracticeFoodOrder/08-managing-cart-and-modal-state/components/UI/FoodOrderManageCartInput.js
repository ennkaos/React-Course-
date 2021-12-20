import classes from './FoodOrderManageCartInput.module.css';

const FoodOrderManageCartInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default FoodOrderManageCartInput;
