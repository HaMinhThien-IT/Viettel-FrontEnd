import React from 'react';
import Slider from 'react-slick';

export default function Test() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
  return <div>
          <>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          
        </Slider>
      </>
  </div>;
}
