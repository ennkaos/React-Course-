import { Fragment } from 'react';

import FoodOrderAddModalHeaderCartButton from './FoodOrderAddModalHeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderAddModalHeader.module.css';

const FoodOrderAddModalHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderAddModalHeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderAddModalHeader;
