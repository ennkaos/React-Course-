import { Fragment } from 'react';

import FoodOrderShoppingCartHeaderCartButton from './FoodOrderShoppingCartHeaderCartButton';
import FoodOrderShoppingCartmealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderShoppingCartHeader.module.css';

const FoodOrderShoppingCartHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderShoppingCartHeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={FoodOrderShoppingCartmealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderShoppingCartHeader;
