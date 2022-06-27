import classes from './CartButton.module.css';
import { showCartActions } from '../../store/showCartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  const quantity = useSelector(state => state.cart.quantity)

 const dispatch = useDispatch();

const toggleCartHandler = () => {
dispatch(showCartActions.toggleCart())
}

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>
{quantity}
      </span>
    </button>
  );
};

export default CartButton;
