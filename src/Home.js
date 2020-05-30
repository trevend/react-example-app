import React from 'react';
import {
  Link,
} from "react-router-dom";
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProductGrid from './components/ProductGrid';

function Home() {
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
    {/* Home */}
    <div className="home">
      <Hero />
    </div>
    {/* Products */}
    <ProductGrid categoryName="home-main"/>
    {/* Ad */}
    <div className="avds_xl">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="avds_xl_container clearfix">
              <div className="avds_xl_background" style={{backgroundImage: 'url(images/avds_xl.jpg)'}} />
              <div className="avds_xl_content">
                <div className="avds_title">Amazing Devices</div>
                <div className="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.</div>
                <div className="avds_link avds_xl_link"><a href="categories.html">See More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Icon Boxes */}
    <div className="icon_boxes">
      <div className="container">
        <div className="row icon_box_row">
          {/* Icon Box */}
          <div className="col-lg-4 icon_box_col">
            <div className="icon_box">
              <div className="icon_box_image"><img src="images/icon_1.svg" alt="" /></div>
              <div className="icon_box_title">Free Shipping Worldwide</div>
              <div className="icon_box_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
              </div>
            </div>
          </div>
          {/* Icon Box */}
          <div className="col-lg-4 icon_box_col">
            <div className="icon_box">
              <div className="icon_box_image"><img src="images/icon_2.svg" alt="" /></div>
              <div className="icon_box_title">Free Returns</div>
              <div className="icon_box_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
              </div>
            </div>
          </div>
          {/* Icon Box */}
          <div className="col-lg-4 icon_box_col">
            <div className="icon_box">
              <div className="icon_box_image"><img src="images/icon_3.svg" alt="" /></div>
              <div className="icon_box_title">24h Fast Support</div>
              <div className="icon_box_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    <div className="footer_overlay" />
    <footer className="footer">
      <div className="footer_background" style={{backgroundImage: 'url(images/footer.jpg)'}} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
              <div className="footer_logo"><Link to="/">Trevend Demo</Link></div>
              <div className="copyright ml-auto mr-auto">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" rel="noopener noreferrer" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>;
}

export default Home;
