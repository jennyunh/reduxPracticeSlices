import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {

const title = useSelector(state => state.cart.title);
const price = useSelector(state => state.cart.price);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title={title}
          price={price}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
