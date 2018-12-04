import React from 'react';
// import Recipe from './Recipe';
import { connect } from 'react-redux';

const RecipeList = ({ newRecipes }) => {
  // const { newRecipes } = newRecipesArray;
  return (
    <div>
      {newRecipes.map((recipe, index) =>
      <li>{recipe.name}</li>
    )}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    newRecipes: state.currentSearchRecipeList.newRecipes
  };
};

export default connect(mapStateToProps)(RecipeList);
