import { Fragment } from 'react';

import FoodOrderHeaderCartButton from './FoodOrderHeaderCartButton';
import FoodOrdermealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderHeader.module.css';

const FoodOrderHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderHeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={FoodOrdermealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderHeader;
