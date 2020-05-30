import React from 'react';
import './ProductGrid.sass';
import {
  useProducts,
} from '@trevend/kit'
import {
  Link,
} from "react-router-dom";

function ProductGrid({ categoryName }) {
  const { loading, products } = useProducts({ categoryName })

  if (loading) {
    return 'Loading';
  }

  const items = products.map(product => {
    return <ProductItem
      key={product.id}
      item={product}
    />
  });

  if (items.length === 0) {
    return <div className="ProductGridComponent">
      <p style={{textAlign: 'center', fontSize: "24px", paddingBottom: "40px"}}>
        Please create minimum one product and assign it to a category called 'home'.
      </p>
    </div>
  }

  return <div className="ProductGridComponent">
    <div className="container">
      <div className="row">
        { items }
      </div>
    </div>
  </div>
}

function ProductItem({ item }) {
  return <div className="col-12 col-sm-6 col-md-4 col-lg-4">
    <div className="product">
      <div className="product_image" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
      { /* <div className="product_extra product_sale"><a href="categories.html">Sale</a></div> */ }
      { /* <div className="product_extra product_new"><a href="categories.html">NEW</a></div> */ }
      { /* <div className="product_extra product_hot"><a href="categories.html">HOT</a></div> */ }
      <div className="product_content">
        <div className="product_title"><Link to={`products/${item.id}`}>{item.title}</Link></div>
        <div className="product_price">{item.price}</div>
      </div>
    </div>
  </div>
}

export default ProductGrid;
