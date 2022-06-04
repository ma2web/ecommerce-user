import { combineReducers } from 'redux';
import products from './products';
import category from './category';
import filter from './filter';
import watchlist from './watchlist';

export default combineReducers({
  products,
  category,
  filter,
  watchlist
});
