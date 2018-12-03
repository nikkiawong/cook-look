import * as types from './../constants/ActionTypes';

export function fetchRecipeList() {
  return function (dispatch) {
    return fetch('https://api.edamam.com/search?q=chicken&app_id=604ff2e9&app_key=2c3508b8450862c662b8c50f0b5bf536').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json);
    })
  }
}
