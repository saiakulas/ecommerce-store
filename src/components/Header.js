import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Header.css'; // Import CSS file for custom styling

function Header() {
  return (
    <div className="carousel-container">
      <CarouselProvider
          naturalSlideWidth={160}
          naturalSlideHeight={80}
          totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Image src="https://img.freepik.com/premium-vector/sale-ads-web-banner-template-design_1033790-946.jpg?w=1060" className="carousel-image"/>
          </Slide>
          <Slide index={1}>
            <Image src="https://img.freepik.com/free-vector/landing-page-fashion-sale_23-2148584747.jpg?t=st=1709985195~exp=1709988795~hmac=2d63a86d0161581d38dbf359d63d2fecb5c574be32957c81905ccf23f614debd&w=996" className="carousel-image"/>
          </Slide>
          <Slide index={2}>
            <Image src="https://img.freepik.com/premium-psd/psd-banner-flash-sale-up-30-off-template_756058-51.jpg?w=1060" className="carousel-image"/>
          </Slide>
        </Slider>
        <div className="carousel-buttons">
          <ButtonBack><a href="#" class="previous round">&#8249;</a></ButtonBack>
          <ButtonNext><a href="#" class="next round">&#8250;</a></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default Header;
