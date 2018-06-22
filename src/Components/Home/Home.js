import React, { Component } from 'react';
import { Footer, SlickSlider } from 'Components';
import { Link } from 'react-router-dom';
import './Home.scss';
import { withCookies } from 'react-cookie';
import MusicIcon from 'images/icon_music.png';
import EntertainmentIcon from 'images/icon_entertainment.png';
import DaigassoIcon from 'images/icon_daigasso.png';
import MrblogIcon from 'images/icon_mrblog.png';
import GamevideoIcon from 'images/icon_gamevideo.png';

class Home extends Component {

    handleClick = () => {
        const { cookies } = this.props;
        console.log(cookies);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <SlickSlider />

                <p className='wanna-play'>Wanna Have <span style={{ fontWeight: '800'}}>Fun</span>?</p>

                <div className='quick-link-container'>
                    <div className='quick-link-column'>
                        <Link to='/music'>
                            <div className='quick-link-item music'>
                                <img src={MusicIcon} alt='music' />
                                <p>Music Works</p>
                            </div>
                        </Link>
                        <Link to='/entertainment'>
                            <div className='quick-link-item entertainment'>
                                <img src={EntertainmentIcon} alt='entertainment' />
                                <p>Entertainment</p>
                            </div>
                        </Link>
                        <Link to='/daigasso'>
                            <div className='quick-link-item daigasso'>
                               <img src={DaigassoIcon} alt='daigasso' />
                               <p>Daigasso! DX</p>
                            </div>
                        </Link>
                    </div>
                    <div className='quick-link-column'>
                        <Link to='/gamevideo'>
                            <div className='quick-link-item gamevideo'>
                                <img src={GamevideoIcon} alt='gamevideos' />
                                <p>Game videos</p>
                            </div>
                        </Link>
                        <Link to='/mrblog'>
                            <div className='quick-link-item mrblog'>
                            <img src={MrblogIcon} alt='mr. blog' />
                            <p>Mr. Blog</p>
                            </div>
                        </Link>
                        <div className='quick-link-item'>
                            <img src='https://media.giphy.com/media/rQ1lzHO0wquGI/giphy.gif' alt='' style={{width: '50%', height: '50%', top: '80%'}}/>
                        </div>
                    </div>
                </div>

                {/* <button onClick={this.handleClick}>쿠키 확인</button> */}

                <Link to='/about'>
                    <div className='who-are-you-wrapper'>
                        <div className='who-are-you-container'>
                            <p className='who-are-you'>Who the hell are you?</p>
                        </div>
                    </div>
                </Link>
                    
                <Footer />
            </div>
        );
    }
};

export default withCookies(Home);