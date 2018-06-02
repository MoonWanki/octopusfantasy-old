import React, { Component } from 'react';
import './NavDropdownItem.scss';

class NavDropdownItem extends Component {
    render() {

        const { contentTitle, content } = this.props;
        return (
            <div id='nav-dropdown-item' >
                <div id='nav-dropdown-item-inner'>
                </div>
            </div>
        );
    }
}

export default NavDropdownItem;