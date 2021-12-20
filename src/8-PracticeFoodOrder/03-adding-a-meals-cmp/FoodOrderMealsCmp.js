import { Fragment } from 'react';

import FoodOrderMealsHeader from './food_order_meals_components/Layout/FoodOrderMealsHeader';
import FoodOrderMeals from './food_order_meals_components/Meals/FoodOrderMeals-Meals';


function FoodOrderMealsCmp() {
  return (
    <Fragment>
      <FoodOrderMealsHeader />
      <main>
        <FoodOrderMeals />
      </main>
    </Fragment>
  );
}

export default FoodOrderMealsCmp;
