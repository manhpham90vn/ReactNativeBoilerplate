import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/slices/authSlice';
import { homeReducer } from 'src/redux/slices/homeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
