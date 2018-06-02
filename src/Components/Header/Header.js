import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import NavContainer from './NavContainer';
import styled from 'styled-components';
import NavDropdown from './NavDropdown';

const HeaderWrapper = styled.div`

    height: 80px;
    position: fixed;
    width: 100%;
    z-index: 100;
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${
        props=>props.transparency ? 'rgba(0, 0, 0, 0.0)' : 'rgba(255, 255, 255, 1.0)'
    };

`;

const Header = ({ transparency }) => {

    return (
        <div>
            <HeaderWrapper transparency={transparency}>
                <div id="header-inner">
                    <Link to="/">
                        <div id="logo-container" />
                    </Link>
                    <NavContainer transparency={transparency} />
                </div>
            </HeaderWrapper>
            
        </div>
    )
    
}

export default Header;