import { Fragment } from 'react';

import FoodOrderManageCartHeaderCartButton from './FoodOrderManageCartHeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderManageCartHeader.module.css';

const FoodOrderManageCartHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderManageCartHeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderManageCartHeader;
