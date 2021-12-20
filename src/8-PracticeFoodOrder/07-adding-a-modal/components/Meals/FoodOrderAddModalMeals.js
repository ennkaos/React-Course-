import { Fragment } from 'react';

import FoodOrderAddModalMealsSummary from './FoodOrderAddModalMealsSummary';
import FoodOrderAddModalAvailableMeals from './FoodOrderAddModalAvailableMeals';

const FoodOrderAddModalMeals = () => {
  return (
    <Fragment>
      <FoodOrderAddModalMealsSummary />
      <FoodOrderAddModalAvailableMeals />
    </Fragment>
  );
};

export default FoodOrderAddModalMeals;
