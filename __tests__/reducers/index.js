import constants from './../../src/constants';
import searchRecipeReducer from './../../src/reducers/searchRecipeReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Cook Look', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('searchRecipeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(searchRecipeReducer(initialState.currentSearchRecipeList, { type: null })).toEqual(initialState.currentSearchRecipeList);
    });

    it('Should update state when API is being requested.', () => {
      const action = actions.searchRecipe('chicken');
      const newStateEntry = {
        isFetching: true
      };
      expect(searchRecipeReducer(initialState.currentSearchRecipeList, action)).toEqual(newStateEntry);
    });

    it('Should update state when API returns.', () => {
      const testArray = [{ name: 'Apple Pie' }, { name: 'Apple Cider' }, { name: 'Apple Chips' }];
      const action = actions.receiveRecipe(testArray);
      const newStateEntry = {
        isFetching: false,
        newRecipes: testArray
      };
      expect(searchRecipeReducer(initialState.currentSearchRecipeList, action)).toEqual(newStateEntry);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    })
  })
});
