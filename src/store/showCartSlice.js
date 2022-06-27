import { createSlice } from '@reduxjs/toolkit';


const initialShowCart = { show: false };

const showCartSlice = createSlice({
  name: 'show cart',
  initialState: initialShowCart,
  //IMPORTANT! this has to be reducers not reducer or it will not work..
  reducers: {
    toggleCart(state) {
      state.show = !state.show;
    }
  },
});

export default showCartSlice
export const showCartActions = showCartSlice.actions;
