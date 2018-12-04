import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const searchRecipe = (localRecipeId) => ({
  type: types.SEARCH_RECIPE,
  recipeId: localRecipeId
});

export function fetchRecipeList(userInput) {
  return function (dispatch) {
    const localRecipeId = v4();
    dispatch(searchRecipe(localRecipeId));
    return fetch('https://api.edamam.com/search?q=' + userInput + '&app_id=604ff2e9&app_key=2c3508b8450862c662b8c50f0b5bf536').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      let newRecipes = [];
      Object.keys(json.hits).map(recipeId => {
        let dish = json.hits[recipeId];
        let recipeObject = {
          name: dish.recipe.label
        };
        newRecipes.push(recipeObject.name);
      });
      console.log(newRecipes);
      console.log(json);
      console.log(json.hits[0].recipe.label);
    });
  };
}
