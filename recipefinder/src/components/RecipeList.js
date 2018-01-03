import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component{
  render(){
    return (
      <div>
        {
          this.props.recipes.map((recipe, index) => {
            return(
              <RecipeItem 
                key={index} 
                recipe={recipe}
                favoriteButton={true}
              />
            )
          })
        }
      </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);