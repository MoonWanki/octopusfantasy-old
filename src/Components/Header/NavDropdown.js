import React, { Component } from 'react';
import NavDropdownItem from './NavDropdownItem';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from 'store/modules/header';
import './NavDropdown.scss';


const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class NavDropdown extends Component {

    handleOnClick = () => {
        this.props.HeaderActions.setOnHeader(false);
    }

    renderDropdown = () => {
        const { items } = this.props;
        let id = 0;
        return items.map((item)=>(
            <NavLink to={item.url} key={id++} activeStyle={{}}>
                <NavDropdownItem
                    key={id++}
                    contentTitle={item.contentTitle}
                    content={item.content}
                />
            </NavLink>
        ))
    }

    render() {

        const { renderDropdown, handleOnClick } = this;
        const { onMouseLeave } = this.props;
        return (
            <div id='nav-dropdown' onMouseLeave={onMouseLeave} onClick={handleOnClick}>
                {renderDropdown()}
            </div>
        )
        
    }
}

export default connect(
    null,
    mapDispatchToProps
)(NavDropdown);