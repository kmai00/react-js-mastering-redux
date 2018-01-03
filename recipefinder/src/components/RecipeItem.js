import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';

class RecipeItem extends Component{
  constructor(){
    super();

    this.state = {
      favorited: false
    }
  }

  favorite(recipe){
    this.setState({favorited: true})
    this.props.favoriteRecipe(recipe)
  }

  render(){
    let { recipe } = this.props;

    return(
      <div className="recipe-item">
      {
        this.props.favoriteButton ?
            this.state.favorited ? 
              <div className="star">&#9733;</div>
            :
              <div 
                className="star"
                onClick={() => this.favorite(recipe)}>
                &#9734;
              </div>
        :
          <div></div>
      }
      
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4 className="recipe-text">{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img className="recipe-image"
          src={recipe.thumbnail} alt={recipe.title}/>
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe } )(RecipeItem);