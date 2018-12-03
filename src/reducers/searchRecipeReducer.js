import constants from './../constants';
const { types, initialState } = constants;

const searchRecipeReducer = (state = initialState.currentSearchRecipeList[1], action) => {
  switch (action.type) {
  case types.SEARCH_RECIPE:
    const newRecipeSearchSlice = Object.assign({}, state, {
      isFetching: true
    });
    return newRecipeSearchSlice;
  default:
    return state;
  }
};

export default searchRecipeReducer;
