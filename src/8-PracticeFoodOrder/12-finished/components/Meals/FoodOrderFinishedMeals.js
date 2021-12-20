import { Fragment } from 'react';

import FoodOrderFinishedMealsSummary from './FoodOrderFinishedMealsSummary';
import FoodOrderFinishedAvailableMeals from './FoodOrderFinishedAvailableMeals';

const FoodOrderFinishedMeals = () => {
  return (
    <Fragment>
      <FoodOrderFinishedMealsSummary />
      <FoodOrderFinishedAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderFinishedMeals;
