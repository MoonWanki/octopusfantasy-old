import React, { Component } from 'react';
import { Footer, SlickSlider } from 'Components';
import { Link } from 'react-router-dom';
import './Home.scss';
import MusicBanner from '../../images/content_banner_music.jpg';
import DaigassoBanner from '../../images/content_banner_daigasso.jpg';
import GamevideoBanner from '../../images/content_banner_gamevideo.jpg';
import { withCookies } from 'react-cookie';

class Home extends Component {

    handleClick = () => {
        const { cookies } = this.props;
        console.log(cookies);
    }
    render() {

        return (
            <div>
                <SlickSlider />
                <div className='quick-link-wrapper'>

                    <p className='quick-link-title'>Hello World!</p>
                    
                    <div style={{
                        position: 'relative',       
                        width: '30px',
                        height: '1px',
                        background: 'black',
                        transform: 'translateX(-50%)',
                        left: '50%',
                        marginTop: '5px',
                        marginBottom: '30px'
                    }}></div>
                    
                    <div className='quick-link-container'>
                        <div className='quick-link-item item1'>
                        </div>
                        <div className='quick-link-item item2'>
                        </div>
                        <div className='quick-link-item item3'>
                        </div>
                    </div>
                    <div className='quick-link-container'>
                        <div className='quick-link-item item4'>
                        </div>
                        <div className='quick-link-item item5'>
                        </div>
                    </div>

                </div>

                <button onClick={this.handleClick}>쿠키 확인</button>

                <Link to='/about'>
                    <div className='who-are-you-container'>
                        <p className='who-are-you'>Who the hell are you?</p>
                    </div>
                </Link>
                    
                <Footer />
            </div>
        );
    }
};

export default withCookies(Home);