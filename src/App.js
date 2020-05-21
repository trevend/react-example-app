import React from 'react';
import {
  Provider,
  useProduct,
} from '@trevend/kit'

function App() {
  return (
    <Provider apiKey={process.env.REACT_APP_TREVEND_API_KEY}>
      <div>
        <h2>My first Trevend product 🚀</h2>
        <Product />
      </div>
    </Provider>
  );
}

function Product() {
  const product = useProduct('ADD_YOUR_PRODUCT_ID_HERE');
  return JSON.stringify(product);
}

export default App;
