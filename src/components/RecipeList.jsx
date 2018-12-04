import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RecipeList = ({ newRecipes }) => {
  return (
    <div>
      {newRecipes.map((recipe) =>
        <div key={recipe.key}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image}></img>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) =>
              <li key={index}>{ingredient}</li>)}
          </ul>
          <p><a href={recipe.url}>Recipe Source</a></p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newRecipes: state.currentSearchRecipeList.newRecipes
  };
};

RecipeList.propTypes = {
  newRecipes: PropTypes.array
}

export default connect(mapStateToProps)(RecipeList);
