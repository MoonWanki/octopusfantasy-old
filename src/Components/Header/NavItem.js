import React, { Component } from 'react';
import './NavItem.scss';
import styled from 'styled-components';


class NavItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    Bold = styled.b`
        color: ${props=>props.transparency ? 'white' : (props=>props.active ? 'black' : 'gray')}
        border-bottom: ${props=>props.active ? '3px solid #f6e11d' : 'none'}
    `

    onMouseEnter = (e) => {
        const { name, handleMouseEnter } = this.props;
        e.stopPropagation();
        handleMouseEnter(name);
    }

    onMouseLeave = (e) => {
        const { name, handleMouseLeave } = this.props;
        e.stopPropagation();
        handleMouseLeave(name);
    }

    render() {

        const { name, active, transparency } = this.props;
        const { onMouseEnter, onMouseLeave, Bold } = this;

        return (
            <div id="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Bold active={active} transparency={transparency}>{name}</Bold>
            </div>
          
        );
    }
}

export default NavItem;