import constants from './../constants';
const { types, initialState } = constants;

const searchRecipeReducer = (state = initialState.currentSearchRecipeList, action) => {
  switch (action.type) {
  case types.SEARCH_RECIPE:
    return state;
  default:
    console.log(state[1].food);
    console.log(state);
    return state;
  }
};

export default searchRecipeReducer;
