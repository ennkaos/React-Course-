import FoodOrderManageCartCard from '../UI/FoodOrderManageCartCard';
import FoodOrderManageCartMealItem from './MealItem/FoodOrderManageCartMealItem';
import classes from './FoodOrderManageCartAvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const FoodOrderManageCartAvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <FoodOrderManageCartMealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <FoodOrderManageCartCard>
        <ul>{mealsList}</ul>
      </FoodOrderManageCartCard>
    </section>
  );
};

export default FoodOrderManageCartAvailableMeals;
