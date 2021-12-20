import { Fragment } from 'react';

import FoodOrderCartItemsHeaderButton from './FoodOrderCartItemsHeaderButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './FoodOrderCartItemsHeader.module.css';

const FoodOrderCartItemsHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <FoodOrderCartItemsHeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default FoodOrderCartItemsHeader;
