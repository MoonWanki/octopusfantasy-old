import React, { Component } from 'react';
import './NavItem.scss';
import styled from 'styled-components';
import NavDropdown from './NavDropdown';


class NavItem extends Component {

    Bold = styled.p`
        pointer-events: none;
        color: ${props=>props.transparency ? 'white' : (props=>props.routed ? 'black' : 'gray')};
        font-size: 1.1rem;
        font-weight: 800;
        border-bottom: ${props=>props.routed ? '2px solid #FFC107' : 'none'};
    `

    onMouseEnter = (e) => {
        const { name, onMouseOver } = this.props;
        e.stopPropagation();
        onMouseOver(name, true);
    }

    onMouseLeave = (e) => {
        const { name, onMouseOver } = this.props;
        //e.stopPropagation();
        onMouseOver(name, false);
    }

    render() {

        const { name, routed, transparency, active, dropdownItems } = this.props;
        const { onMouseEnter, onMouseLeave, Bold } = this;

        return (
            <div
                id="nav-item-container"
                style={{ backgroundColor: (active ? '#f9f9f9' : 'inherit') }}>
                <div id="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Bold routed={routed} transparency={transparency}>{name}</Bold>
                </div>
                {dropdownItems!==null && active
                    ? <NavDropdown name={name} items={dropdownItems} onMouseLeave={onMouseLeave} />
                    : null
                }
            </div>
          
        );
    }
}

export default NavItem;