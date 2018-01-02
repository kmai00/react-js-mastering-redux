import { combineReducers } from 'redux';
import characters from './characters_reducer.js';
import heroes from './heroes_reducer.js';

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;