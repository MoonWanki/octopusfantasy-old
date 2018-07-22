import React, { Component } from 'react';
import './GlobalHeader.scss';

class GlobalHeader extends Component {
    
    render() {
        return (
            <div className='header-top-container'>
                <div className='header-top-inner'>
                    <a href="https://www.octopusfantasy.com">
                        <div className='logo-octopusfantasy' />
                    </a>
                    <a href="https://www.octopusfantasy.com/login">
                        <div className='login-box'>
                            {/* {cookies.get('userdata')
                                ? <div className='hello'>{cookies.get('userdata')["nickname"]}님 어서오세요!</div>
                                : <div className='login-button'><p style={{position: 'relative', transform: 'translateY(-50%)', top: '50%'}}>로그인</p></div>
                            } */}
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default GlobalHeader;