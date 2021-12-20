import { useContext } from 'react';

import FoodOrderCartItemsModal from '../UI/FoodOrderCartItemsModal';
import FoodOrderCartItemItems from './FoodOrderCartItemItems';
import classes from './FoodOrderCartItemItems.module.css';
import FoodOrderCartItemsCartContext from '../../store/FoodOrderCartItems-cart-context';

const FoodOrderItemsCart = (props) => {
  const cartCtx = useContext(FoodOrderCartItemsCartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <FoodOrderCartItemItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <FoodOrderCartItemsModal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </FoodOrderCartItemsModal>
  );
};

export default FoodOrderItemsCart;
