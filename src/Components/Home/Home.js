import React, { Component } from 'react';
import { Footer, SlickSlider } from 'Components';
import './Home.scss';

class Home extends Component {

    render() {

        return (
            <div id="home-wrapper">
                <div id="home-video-zone">
                    <SlickSlider />
                </div>
                

                <Footer />
            </div>
        );
    }
};

export default Home;