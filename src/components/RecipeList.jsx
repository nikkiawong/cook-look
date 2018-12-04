import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RecipeList = ({ newRecipes }) => {
  return (
    <div>
      {newRecipes.map((recipe) =>
        <li key={recipe.key}>{recipe.name}</li>
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
