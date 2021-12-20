import { Fragment } from 'react';

import FoodOrderFinishedHeaderCartButton from './FoodOrderFinishedHeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderFinishedHeader.module.css';

const FoodOrderFinishedHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderFinishedHeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderFinishedHeader;
