import { Fragment } from 'react';

import FoodOrderCartReducerMealsSummary from './FoodOrderCartReducerMealsSummary';
import FoodOrderCartReducerAvailableMeals from './FoodOrderCartReducerAvailableMeals';

const FoodOrderCartReducerMeals = () => {
  return (
    <Fragment>
      <FoodOrderCartReducerMealsSummary />
      <FoodOrderCartReducerAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderCartReducerMeals;
