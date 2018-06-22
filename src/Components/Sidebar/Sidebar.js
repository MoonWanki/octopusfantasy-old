import React, { Component } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from 'store/modules/header';

const mapStateToProps = (state) => ({
    sidebar: state.header.sidebar
});

const mapDispatchToProps = (dispatch) => ({
    HeaderActions: bindActionCreators(headerActions, dispatch)
});

class Sidebar extends Component {

    closeSidebar = () => {
        this.props.HeaderActions.setSidebar(false);
    }
    render() {

        return (
            <div className={ this.props.sidebar ? 'sidebar-container on' : 'sidebar-container' }>
                <Link to='/music'>
                    <div className='sidebar-item' onClick={this.closeSidebar}>
                        MusicWorks
                    </div>
                </Link>
                <Link to='/entertainment'>
                    <div className='sidebar-item' onClick={this.closeSidebar}>
                        Entertainments
                    </div>
                </Link>
                <Link to='/daigasso'>
                    <div className='sidebar-item' onClick={this.closeSidebar}>
                        Daigasso! DX
                    </div>
                </Link>
                <Link to='/gamevideo'>
                    <div className='sidebar-item' onClick={this.closeSidebar}>
                        Game Videos
                    </div>
                </Link>
                <Link to='/mrblog'>
                    <div className='sidebar-item' onClick={this.closeSidebar}>
                        Mr. Blog
                    </div>
                </Link>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);