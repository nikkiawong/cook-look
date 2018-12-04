import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RecipeList = ({ newRecipes }) => {
  return (
    <div>
      {newRecipes.map((recipe) =>
        <li key={recipe.key}>{recipe.name}
          <ul>
            <li><img src={recipe.image}></img></li>
            <li>{recipe.ingredients}</li>
            <li>{recipe.url}</li>
          </ul>
        </li>
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
