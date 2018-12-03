import React from 'react';
import { fetchRecipeList } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Search({ dispatch }) {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchRecipeList(input.value.trim()));
      }}>
        <input type='text' ref={node => {
          input = node;
        }}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Search);
