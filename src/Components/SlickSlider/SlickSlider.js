import React, { Component } from 'react';
import Slider from 'react-slick';
import './SlickSlider.scss';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
// import banner from 'images/banner_sample.png';

class SlickSlider extends Component {

	settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	};


	render() {

		const { settings } = this;
	  	
	  	return (
			<div id="slider">
				<Slider {...settings}>
					<div>
						
					</div>
					<div>
					
					</div>
					<div>
				
					</div>
				</Slider>
			</div>
	  	);
	}
  }

export default SlickSlider;