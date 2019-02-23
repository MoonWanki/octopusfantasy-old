import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';
import './Header.scss';

class Header extends Component {

    getCurrentPath = () => {
        switch(this.props.path) {
            case '/music':
            case '/entertainment':
            case '/daigasso':
            case '/gamevideo':
            case '/mrblog':
                return 'products';
            case '/about':
                return 'about';
            default:
                return null;
        }
    }
    render() {

        const { topVisible } = this.props;
        const currentPath = this.getCurrentPath();

        return (
            <Fragment>
                <div className={topVisible ? 'header-container header-transparent' : 'header-container'}>
                    <div className='header-inner'>
                        <Link to='/'>
                            <div className='header-logo' />
                        </Link>
                        <div className='header-nav-item header-nav-item-products'>
                            <p className='header-nav-item-text' style={currentPath==='products'?{borderBottom: '2px solid #FFC107'}:null}>PRODUCTS</p>
                            <div className='header-dropdown'><MenuDropdown /></div>
                        </div>
                        <Link to='/about'>
                            <div className='header-nav-item'><p className='header-nav-item-text' style={currentPath==='about'?{borderBottom: '2px solid #FFC107'}:null}>ABOUT</p></div>
                        </Link>
                        <div style={{float: 'right'}}>
                            <div className='link-to-mahjong' />
                            <div className='search-input-container'>
                                <div className='search-input'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}

export default Header;