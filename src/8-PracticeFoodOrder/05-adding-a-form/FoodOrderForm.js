import { Fragment } from 'react';

import FoodOrderFormHeader from './food_order_form_components/Layout/FoodOrderFormHeader';
import FoodOrderFormMeals from './food_order_form_components/Meals/FoodOrderFormMeals';

function FoodOrderForm() {
  return (
    <Fragment>
      <FoodOrderFormHeader />
      <main>
        <FoodOrderFormMeals />
      </main>
    </Fragment>
  );
}

export default FoodOrderForm;
