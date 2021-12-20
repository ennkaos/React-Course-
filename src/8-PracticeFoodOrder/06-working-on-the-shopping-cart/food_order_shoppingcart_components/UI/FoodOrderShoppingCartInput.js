import classes from './FoodOrderShoppingCartInput.module.css';

const FoodOrderShoppingCartInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default FoodOrderShoppingCartInput;
