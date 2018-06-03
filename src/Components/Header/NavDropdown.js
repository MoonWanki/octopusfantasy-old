import React, { Component } from 'react';
import NavDropdownItem from './NavDropdownItem';
import { Link } from 'react-router-dom';
import './NavDropdown.scss';

class NavDropdown extends Component {

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

    renderDropdown = () => {
        const { items } = this.props;
        let id = 0;
        return items.map((item)=>(
            <Link to={item.url} key={id++}>
                <NavDropdownItem
                    key={id++}
                    contentTitle={item.contentTitle}
                    content={item.content}
                />
            </Link>
        ))
    }

    render() {

        const { active } = this.props;
        const { renderDropdown, onMouseEnter, onMouseLeave } = this;
        return active ? (
            <div id='nav-dropdown' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {renderDropdown()}
            </div>
        ) : (
            <div></div>
        );
        
    }
}

export default NavDropdown;