import React, { Component } from 'react';
import { Footer } from 'Components';
import Slider from './Slider/Slider';
import { Link } from 'react-router-dom';
import './Home.scss';
import MusicIcon from 'images/icon_music.png';
import EntertainmentIcon from 'images/icon_entertainment.png';
import DaigassoIcon from 'images/icon_daigasso.png';
import MrblogIcon from 'images/icon_mrblog.png';
import GamevideoIcon from 'images/icon_gamevideo.png';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
                <div className='home-container'>
                    <Helmet>
                        <title>Octopus Fantasy</title>
                    </Helmet>
                    <Slider />
                    <Fade bottom delay={250} duration={700} distance="30%">
                        <p className='wanna-play'>Wanna Have <span style={{ fontWeight: '800'}}>Fun</span>?</p>
                    </Fade>
                    <div className='quick-link-container'>
                        <div className='quick-link-column'>
                            <Link to='/music'>
                                <Fade bottom delay={300} duration={700} distance="30%">
                                    <div className='quick-link-item music'>
                                        <img src={MusicIcon} alt='music' />
                                        <p>Music Works</p>
                                    </div>
                                </Fade>
                            </Link>
                            <Link to='/entertainment'>
                                <Fade bottom delay={350} duration={700} distance="30%">    
                                    <div className='quick-link-item entertainment'>
                                        <img src={EntertainmentIcon} alt='entertainment' />
                                        <p>Entertainment</p>
                                    </div>
                                </Fade>
                            </Link>
                            <Link to='/daigasso'>
                                <Fade bottom delay={400} duration={700} distance="30%">
                                    <div className='quick-link-item daigasso'>
                                    <img src={DaigassoIcon} alt='daigasso' />
                                    <p>Daigasso! DX</p>
                                    </div>
                                </Fade>
                            </Link>
                        </div>
                        <div className='quick-link-column'>
                            <Link to='/gamevideo'>
                                <Fade bottom delay={350} duration={700} distance="30%">
                                    <div className='quick-link-item gamevideo'>
                                        <img src={GamevideoIcon} alt='gamevideos' />
                                        <p>Game videos</p>
                                    </div>
                                </Fade>
                            </Link>
                            <Link to='/mrblog'>
                                <Fade bottom delay={400} duration={700} distance="30%">
                                    <div className='quick-link-item mrblog'>
                                    <img src={MrblogIcon} alt='mr. blog' />
                                    <p>Mr. Blog</p>
                                    </div>
                                </Fade>
                            </Link>
                            <div className='quick-link-item'>
                                <img src='https://media.giphy.com/media/rQ1lzHO0wquGI/giphy.gif' alt='' style={{width: '50%', height: '50%', top: '80%'}}/>
                            </div>
                        </div>
                    </div>

                    <Link to='/about'>
                        <div className='who-are-you-wrapper'>
                            <div className='who-are-you-container'>
                                <Fade bottom distance="30%">
                                    <p className='who-are-you'>Who the hell are you?</p>
                                </Fade>
                            </div>
                        </div>
                    </Link>                    
                    <Footer />
                </div>
        );
    }
};

export default Home;