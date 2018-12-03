import { combineReducers } from 'redux';
import searchRecipeReducer from './searchRecipeReducer';

const rootReducer = combineReducers({
  currentSearchRecipeList: searchRecipeReducer
});

export default rootReducer;
