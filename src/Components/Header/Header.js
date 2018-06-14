import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import NavContainer from './NavContainer';
import UserInfo from './UserInfo';
import whiteLogo from 'images/logo_white.png';
import blackLogo from 'images/logo_black.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from 'store/modules/header';


const mapStateToProps = (state) => ({ transparency: state.header.transparency });
const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class Header extends Component {

    handleMouseEnter = (e) => {
        e.stopPropagation();
        this.props.HeaderActions.setOnHeader(true);
    }

    handleMouseLeave = (e) => {
        e.stopPropagation();
        this.props.HeaderActions.setOnHeader(false);  
    }

    render() {

        const { transparency, cookies } = this.props;

        return (
            <div
            className={ transparency ? 'header-container transparent' : 'header-container'}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
                <div className="header-inner">
                    <Link to="/">
                        <img src={transparency?whiteLogo:blackLogo} alt="logo"/>
                    </Link>
                    <NavContainer transparency={transparency} />
                    <UserInfo transparency={transparency} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);