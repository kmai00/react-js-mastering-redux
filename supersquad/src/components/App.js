import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>SuperSquad</h2>
        <CharacterList/>
      </div>
    )
  }
}

export default App;