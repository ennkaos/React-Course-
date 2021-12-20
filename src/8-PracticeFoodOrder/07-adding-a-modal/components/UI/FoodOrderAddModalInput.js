import classes from './FoodOrderAddModalInput.module.css';

const FoodOrderAddModalInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default FoodOrderAddModalInput;
