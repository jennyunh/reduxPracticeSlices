import { configureStore } from '@reduxjs/toolkit';
import showCartSlice from './showCartSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  //IMPORTANT! this will not work if it is reducers. It must be reducer
    reducer: {showCart: showCartSlice.reducer,
    cart: cartSlice.reducer }
  });
  
  
  
  export default store;
  