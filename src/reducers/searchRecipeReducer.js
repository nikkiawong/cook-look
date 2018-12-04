import constants from './../constants';
const { types, initialState } = constants;

const searchRecipeReducer = (state = initialState.currentSearchRecipeList[1], action) => {
  switch (action.type) {
  case types.SEARCH_RECIPE:
    const newRecipeSearchSlice = Object.assign({}, state, {
      isFetching: true
    });
    return newRecipeSearchSlice;
  case types.RECEIVE_RECIPE:
    const receivedRecipeSearchSlice = Object.assign({}, state, {
      isFetching: false,
      newRecipes: action.newRecipes
    });
    return receivedRecipeSearchSlice;
  default:
    return state;
  }
};

export default searchRecipeReducer;
