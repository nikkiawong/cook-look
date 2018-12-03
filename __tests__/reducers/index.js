import constants from './../../src/constants';
import searchRecipeReducer from './../../src/reducers/searchRecipeReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';

describe('Cook Look', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('searchRecipeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(searchRecipeReducer(initialState.currentSearchRecipeList, { type: null })).toEqual(initialState.currentSearchRecipeList);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    })
  })
});
