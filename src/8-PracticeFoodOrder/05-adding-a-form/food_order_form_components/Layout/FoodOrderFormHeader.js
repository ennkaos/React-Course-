import { Fragment } from 'react';

import FoodOrderFormHeaderCartButton from './FoodOrderFormHeaderCartButton';
import FoodOrderFormmealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderFormHeader.module.css';

const FoodOrderFormHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderFormHeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={FoodOrderFormmealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderFormHeader;
