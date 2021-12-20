import { Fragment } from 'react';

import FoodOrderMealsHeaderCartButton from './FoodOrderMealsHeaderCartButton';
import FoodOrdermealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderMealsHeader.module.css';

const FoodOrderMealsHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderMealsHeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={FoodOrdermealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderMealsHeader;
