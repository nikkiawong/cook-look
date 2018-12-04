import React from 'react';
import Search from './Search';
import Header from './Header';
import RecipeControl from './RecipeControl';

function App(){
  return (
    <div>
      <Header/>
      <p>Search any recipe</p>
      <Search />
      <RecipeControl/>
    </div>
  );
}

export default App;
