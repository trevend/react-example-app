import React from 'react';
import {
  useProduct,
  BuyButton,
} from '@trevend/kit'
import {
  useParams,
} from "react-router-dom";

import Navigation from './components/Navigation';

function Product() {
  const { id } = useParams();
  const { loading, product } = useProduct(id)

  if (loading) {
    return '';
  }

  return <div className="super_container">
    <header className="header">
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="product_details" style={{paddingTop: "80px"}}>
      <div className="container">
        <div className="row details_row">
          {/* Product Image */}
          <div className="col-lg-6">
            <div className="details_image">
              <div className="details_image_large"><img src={product.imageUrl} alt="" /></div>
            </div>
          </div>
          {/* Product Content */}
          <div className="col-lg-6">
            <div className="details_content">
              <div className="details_name">{product.title}</div>
              <div className="details_discount">$500</div>
              <div className="details_price">{product.price}</div>
              {/* In Stock */}
              <div className="in_stock_container">
                <div className="availability">Availability:</div>
                <span>In Stock</span>
              </div>
              <div className="details_text">
                <p>{product.shortText}</p>
              </div>
              {/* Product Quantity */}
              <div className="product_quantity_container">
                <div className="button cart_button">
                  <BuyButton productId={product.id}>
                    Add to cart
                  </BuyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row description_row">
          <div className="col">
            <div className="description_title_container">
              <div className="description_title">Description</div>
            </div>
            <div className="description_text">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Product;
