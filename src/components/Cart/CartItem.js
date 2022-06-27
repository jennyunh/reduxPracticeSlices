import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = () => {
  const title = useSelector(state => state.cart.title);
  const quantity = useSelector(state => state.cart.quantity);
  const price = useSelector(state => state.cart.price);
  const total = useSelector(state => state.cart.total);


  const dispatch = useDispatch();

const incrementHandler = () => {
dispatch(cartActions.increment());
dispatch(cartActions.totalCalculated())
}

const decrementHandler = () => {
  dispatch(cartActions.decrement());
  dispatch(cartActions.totalCalculated())
}



  return (
    <li className={classes.item}>

{(quantity > 0) ?  (    <>  <header>
        <h3>{title}</h3>

        <div className={classes.price}>
          <span className={classes.itemprice}>Price: ${price}</span>
        </div>
      </header>


      <div className={classes.details}>
        <div className={classes.quantity}>
          <span>Quantity: {quantity}</span><br/>
          <span>Total: ${total}</span>
        </div>

        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>

      </div></>) : (<p>no items are in the cart.</p>)}

     
    </li>
  );
};

export default CartItem;
