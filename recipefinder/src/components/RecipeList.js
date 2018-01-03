import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component{
  render(){
    return (
      <div>
        {
          this.props.recipes.map((recipe, index) => {
            return(
              <div key={index}>
                <h4>{recipe.title}</h4>
              </div>
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