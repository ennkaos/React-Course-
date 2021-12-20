import classes from './FoodOrderCartReducerInput.module.css';

const FoodOrderCartReducerInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default FoodOrderCartReducerInput;
