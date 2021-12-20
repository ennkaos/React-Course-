import { Fragment } from 'react';

import FoodOrderIndividualMealMealsSummary from './FoodOrderIndividualMealMealsSummary';
import FoodOrderIndividualMealAvailableMeals from './FoodOrderIndividualMealAvailableMeals';

const FoodOrderIndividualMealMeals = () => {
  return (
    <Fragment>
      <FoodOrderIndividualMealMealsSummary />
      <FoodOrderIndividualMealAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderIndividualMealMeals;
