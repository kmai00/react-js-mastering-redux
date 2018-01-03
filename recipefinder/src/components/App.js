import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes.js'
import RecipeList from './RecipeList'
import FavoriteRecipeList from './FavoriteRecipeList'
import '../styles/index.css'

class App extends Component{
  render(){
    return(
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
        <FavoriteRecipeList />
      </div>
    )
  }
}

export default App;