import React, { Component } from 'react';
import { SlickSlider } from 'Components';
import './Home.scss';

class Home extends Component {

    render() {

        return (
            <div id="home-wrapper">
                <div id="home-video-zone">
                    <SlickSlider />
                </div>
                

            </div>
        );
    }
};

export default Home;