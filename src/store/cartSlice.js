import { createSlice } from '@reduxjs/toolkit';


const initialCart = { title: 'Test Item', quantity: 3, total: 18, price: 6 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  //IMPORTANT! this has to be reducers not reducer or it will not work..
  reducers: {
   increment(state) {
      state.quantity++
    },
    decrement(state) {
        state.quantity--
      },
      totalCalculated(state) {
        state.total = state.quantity * state.price;

      },

  },
});

export default cartSlice
export const cartActions = cartSlice.actions;
