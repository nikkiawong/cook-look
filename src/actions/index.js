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
      let newRecipes2 = {};
      if (json.hits) {
        Object.keys(json.hits).map(recipeId => {
          let dish = json.hits[recipeId];
          let recipeObject = {
            name: dish.recipe.label
          };
          newRecipes.push(recipeObject.name);
          newRecipes2 = Object.assign({}, newRecipes2, recipeObject);
        });
        //OVERWROTE ITSELF 10 TIMES IN A ROW//
      //   dispatch(receiveSong(title, artist, localSongId, songArray));
      //   dispatch(changeSong(localSongId));
      } else {
        console.log('No results found.')
      };



      console.log(newRecipes);
      console.log(newRecipes2);
      console.log(json);
      console.log(json.hits[0].recipe.label);
    });
  };
}
