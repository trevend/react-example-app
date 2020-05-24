import React from 'react';
import {
  Provider,
  useProduct,
} from '@trevend/kit'
import Home from './Home';

function App() {
  return (
    <Provider apiKey={process.env.REACT_APP_TREVEND_API_KEY}>
      <Home />
    </Provider>
  );
}

export default App;
