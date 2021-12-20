import { Fragment } from 'react';

import FoodOrderMealsSummary from './FoodOrderMealsSummary';
import FoodOrderMealsAvailableMeals from './FoodOrderMealsAvailableMeals';

const FoodOrderMeals = () => {
  return (
    <Fragment>
      <FoodOrderMealsSummary />
      <FoodOrderMealsAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderMeals;
