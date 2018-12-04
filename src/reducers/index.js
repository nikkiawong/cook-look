import { combineReducers } from 'redux';
import searchRecipeReducer from './searchRecipeReducer';
import domDisplayReducer from './domDisplayReducer';

const rootReducer = combineReducers({
  currentSearchRecipeList: searchRecipeReducer,
  domDisplay: domDisplayReducer
});

export default rootReducer;
