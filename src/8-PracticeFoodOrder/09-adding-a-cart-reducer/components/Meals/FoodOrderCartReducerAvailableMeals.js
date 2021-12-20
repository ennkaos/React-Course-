import FoodOrderCartReducerCard from '../UI/FoodOrderCartReducerCard';
import FoodOrderCartReducerMealItem from './MealItem/FoodOrderCartReducerMealItem';
import classes from './FoodOrderCartReducerAvailableMeals.module.css';

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

const FoodOrderCartReducerAvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <FoodOrderCartReducerMealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <FoodOrderCartReducerCard>
        <ul>{mealsList}</ul>
      </FoodOrderCartReducerCard>
    </section>
  );
};

export default FoodOrderCartReducerAvailableMeals;
