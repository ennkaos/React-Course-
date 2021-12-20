import { Fragment } from 'react';

import FoodOrderAddModalHeader from './components/Layout/FoodOrderAddModalHeader';
import FoodOrderAddModalMeals from './components/Meals/FoodOrderAddModalMeals';
import FoodOrderAddModalCart from './components/Cart/FoodOrderAddModalCart';

function FoodOrderAddModal() {
  return (
    <Fragment>
      <FoodOrderAddModalCart />
      <FoodOrderAddModalHeader />
      <main>
        <FoodOrderAddModalMeals />
      </main>
    </Fragment>
  );
}

export default FoodOrderAddModal;
