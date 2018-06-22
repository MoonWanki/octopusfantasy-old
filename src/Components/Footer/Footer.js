import React from 'react';
import './Footer.scss';
import react_logo from 'images/react_logo.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-inner">
                <div className="footer-menu powered-by-react">
                    <p className="footer-title">Powered by</p>
                    <a href="https://reactjs.org" target='_blank' rel='noopener noreferrer'>
                        <div className="react-box">
                            <img src={react_logo} alt="logo" />
                            <p className='react'>React</p>
                        </div>
                    </a>
                    <p style={{
                        clear: 'both',
                        fontFamily: 'NanumGothic',
                        fontSize: '0.8rem',
                        color: '#9e9e9e'
                    }}>React v16.4.0 <span style={{color: '#eaeaea'}}>|</span> Redux v4.0.0</p>
                </div>
                <div className="footer-menu">
                    <p className="footer-title">Visit</p>
                    <div className="footer-title-hr" />
                    <a target="_blank" rel='noopener noreferrer' href="https://blog.naver.com/dhksrl2589">
                        <p className='footer-content'>Naver Blog</p>
                    </a>
                    <a target="_blank" rel='noopener noreferrer' href="https://soundcloud.com/moonwanki">
                        <p className='footer-content'>Soundcloud</p>
                    </a>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.youtube.com/channel/UCvVDyOH03o1PRJ1fOLeu6Uw/featured?view_as=subscriber">
                        <p className='footer-content'>YouTube</p>
                    </a>
                </div>
                <div className="footer-menu">
                    <p className="footer-title">Contact</p>
                    <div className="footer-title-hr" />
                    <p className='footer-content'>+82 10-4103-4075</p>
                    <p className='footer-content'>dhksrl2589@gmail.com</p>
                </div>
                <div className="copyright">
                    <p className='copyright-text'>ⓒ 2009-2018 Octopus Fantasy. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;