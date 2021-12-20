import { Fragment } from 'react';

import FoodOrderIndividualMealHeaderCartButton from './FoodOrderIndividualMealHeaderCartButton';
import FoodOrderIndividualMealmealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderIndividualMealHeader.module.css';

const FoodOrderIndividualMealHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderIndividualMealHeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={FoodOrderIndividualMealmealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderIndividualMealHeader;
