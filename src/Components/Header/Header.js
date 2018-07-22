import React, { Component, Fragment } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className='header-container'>
                    <div className='header-inner'>
                        <div className='logo-button' />
                        <div className='nav-container'>
                            <div className='nav-item'>PRODUCTS</div>
                            <div className='nav-item'>ABOUT</div>
                        </div>
                        <div className='mahjong-button'>
                        </div>
                        <div className='search-input-container'>
                            <div className='search-input'></div>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Header;