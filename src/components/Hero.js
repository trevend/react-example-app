import React from 'react';
import './Hero.sass';

function Hero() {
  return <div className="HeroComponent">
    <div className="background-image">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
              <div className="home_slider_title">Trevend Demo</div>
              <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Hero;
