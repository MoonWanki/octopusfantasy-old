import React, { Component } from 'react';
import Slider from 'react-slick';
import './SlickSlider.scss';
import 'slick-carousel/slick/slick.scss'; 
import 'slick-carousel/slick/slick-theme.scss';
import banner1 from 'images/main_banner_1.jpg';
import banner2 from 'images/main_banner_2.jpg';
import banner3 from 'images/main_banner_3.jpg';
import styled from 'styled-components';

const Dot = styled.div`
	overflow: hidden;
	display: block;
	width: 16px;
	height: 16px;
	border-radius: 8px;
	border: 0;
	background-color: #fff;
	color: transparent;
	line-height: 50px;
	opacity: ${props=>props.active ? '1' : '0.5'};
	:hover {
		opacity: 1;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

class SlickSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			bannerText1: "",
			bannerText2: ""
		}
	}
	
	componentDidMount() {
		this.setState({ bannerText1: "견적 얼마 나옴?", bannerText2: "위로해주기" });
	}

	setBannerText1 = () => {
		this.setState({ bannerText1: "안 알랴줌~"});
	}

	setBannerText2 = () => {
		this.setState({ bannerText2: "ㄳㄳ"});
	}
	
	settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		beforeChange: (current, next) => this.setState({ activeSlide: next }),
		customPaging: i => (
			<a>
			  <Dot active={i===this.state.activeSlide}/>
			</a>
		)
	};

	render() {

		const { settings, setBannerText1, setBannerText2 } = this;
		const { bannerText1, bannerText2 } = this.state;
	  	
	  	return (
			<div>
				<div id="slider-container">
					<Slider {...settings}>

						<div>
							<div className='banner-container' style={{ backgroundImage: `url(${banner3})` }} >
								<div className='button-container' style={{top: '70%'}} onClick={setBannerText1}>
									<p>{bannerText1}</p>
								</div>
							</div>
						</div>

						<div>
							<div className='banner-container' style={{ backgroundImage: `url(${banner1})` }} >
								<div className='button-container' style={{top: '73%'}} onClick={setBannerText2}>
									<p>{bannerText2}</p>
								</div>
							</div>
						</div>

						<div>
							<div className='banner-container' style={{ backgroundImage: `url(${banner2})` }} >
								
							</div>
						</div>
						
					</Slider>
					{/* <div id="slider-dots-container">
						<button className='slider-dots' onClick={slickGoTo(1)}>1</button>
						<button className='slider-dots'>2</button>
						<button className='slider-dots'>3</button>						
					</div> */}
				</div>

			</div>
			
	  	);
	}
  }

export default SlickSlider;