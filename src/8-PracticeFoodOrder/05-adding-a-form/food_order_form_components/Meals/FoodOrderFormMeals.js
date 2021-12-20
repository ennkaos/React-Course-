import { Fragment } from 'react';

import FoodOrderFormMealsSummary from './FoodOrderFormMealsSummary';
import FoodOrderFormAvailableMeals from './FoodOrderFormAvailableMeals';

const FoodOrderFormMeals = () => {
  return (
    <Fragment>
      <FoodOrderFormMealsSummary />
      <FoodOrderFormAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderFormMeals;
