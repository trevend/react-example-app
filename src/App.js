import React from 'react';
import {
  Provider,
  useProduct,
} from '@trevend/kit'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Home';
import Product from './Product';


function App() {
  return (
    <Router>
      <Provider apiKey={process.env.REACT_APP_TREVEND_API_KEY}>
          <Switch>
            <Route path="/products/:id">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
