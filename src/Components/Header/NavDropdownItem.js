import React, { Component } from 'react';
import './NavDropdownItem.scss';

class NavDropdownItem extends Component {
    render() {

        const { contentTitle, content } = this.props;
        return (
            <div id='nav-dropdown-item' >
                <div id='nav-dropdown-item-inner'>
                    <div id='nav-dropdown-item-content-title'>
                        <p>{contentTitle}</p>
                    </div>
                    <div id='nav-dropdown-item-content'>
                        <p> <span style={{color: 'rgba(255, 255, 255, 0.3)'}}>|</span>  {content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavDropdownItem;