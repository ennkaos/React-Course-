import { Fragment } from 'react';

import FoodOrderIndividualMealHeader from './food_order_individualmeals_components/Layout/FoodOrderIndividualMealHeader';
import FoodOrderIndividualMealMeals from './food_order_individualmeals_components/Meals/FoodOrderIndividualMealMeals'

function FoodOrderIndividualMeal() {
  return (
    <Fragment>
      <FoodOrderIndividualMealHeader />
      <main>
        <FoodOrderIndividualMealMeals />
      </main>
    </Fragment>
  );
}

export default FoodOrderIndividualMeal;
