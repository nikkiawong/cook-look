import React from 'react';
import { fetchRecipeList } from './../actions';
import { connect } from 'react-redux';

function Search({ dispatch }) {
  let input;
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          console.log('hello');
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

export default connect()(Search);
