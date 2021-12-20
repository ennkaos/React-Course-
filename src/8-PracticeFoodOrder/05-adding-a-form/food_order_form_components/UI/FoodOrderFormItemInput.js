import classes from './FoodOrderFormItemInput.module.css';

const FoodOrderFormInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default FoodOrderFormInput;
