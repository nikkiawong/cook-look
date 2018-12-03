import React from 'react';
import Search from './Search';
import Header from './Header';
import RecipeList from './RecipeList';

function App(){
  return (
    <div>
      <Header/>
      <p>Search any recipe</p>
      <Search/>
      <RecipeList/>
    </div>
  );
}

export default App;
