import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.scss';
import cookie from 'react-cookies';
import naver from 'util/api/naver';
import kakao from 'util/api/kakao';

const naverAuthUrl = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id='+ naver.client_id
+ '&redirect_uri=' + naver.redirectURI
+ '&state=' + naver.state;

const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.client_id}&redirect_uri=${kakao.redirect_uri}&response_type=code`;

class Login extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <div className='login-page-wrapper'>
                { cookie.load('userdata') ? <Redirect to='/' /> : (
                    <div className='login-page-inner'>
                        <Link to='/'>
                            <div className='home-button' ref='homeButton'/>
                        </Link>
                        <div className='login-button-container'>
                            <a href={naverAuthUrl}>
                                <div className='naver-login-button' ref='naverLoginButton'/>
                            </a>
                            <a href={kakaoAuthUrl}>
                                <div className='kakao-login-button' ref='kakaoLoginButton'/>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Login;