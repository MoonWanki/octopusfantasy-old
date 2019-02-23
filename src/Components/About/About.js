import React, { Component, Fragment } from 'react';
import { Footer } from 'Components';
import './About.scss';

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <div className='about-page-wrapper'>
                    <p className='about-page-inner'>페이지 준비중입니다.</p>
                </div>
                <Footer />
            </Fragment>

        );
    }
}

export default About;