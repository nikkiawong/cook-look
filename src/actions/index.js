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
      if (json.hits) {
        Object.keys(json.hits).map(recipeId => {
          const uniqueRecipeId = v4();
          let dish = json.hits[recipeId];
          let recipeObject = {
            name: dish.recipe.label,
            image: dish.recipe.image,
            ingredients: dish.recipe.ingredientLines,
            url: dish.recipe.url,
            key: uniqueRecipeId
          };
          newRecipes.push(recipeObject);
        });
        dispatch(receiveRecipe(newRecipes));
        dispatch(showRecipes());
      } else {
        console.log('No results found.');
      }

      console.log(newRecipes);
    });
  };
}

export const receiveRecipe = (newRecipes) => ({
  type: types.RECEIVE_RECIPE,
  newRecipes
});

export const showRecipes = () => ({
  type: types.SHOW_RECIPES
});
