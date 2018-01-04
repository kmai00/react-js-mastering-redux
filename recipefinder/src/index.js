import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/favorites' component={FavoriteRecipeList}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
