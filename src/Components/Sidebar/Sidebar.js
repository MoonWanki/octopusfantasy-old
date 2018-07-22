import React, { Component } from 'react';
import { SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { Image } from 'semantic-ui-react';

class Sidebar extends Component {

    render() {

        const { cookies } = this.props;
        return (
            <SideNav
            trigger={<div className='sidebar-button' />}
            options={{ closeOnClick: true }} >
                <SideNavItem waves icon='power_settings_new'>
                    {cookies.get('userdata')
                        ?
                        <div>
                            {cookies.get('userdata')["nickname"]}
                            <Image avatar src={cookies.get('userdata')["profileImage"]} />
                        </div>
                        :
                        <Link to='/login'>
                        로그인
                        </Link>
                    }
                </SideNavItem>    
                <Link to='/music'>
                    <SideNavItem waves>Music Works</SideNavItem></Link>
                <Link to='/entertainment'>
                    <SideNavItem waves>Entertainments</SideNavItem>
                </Link>
                <Link to='/daigasso'>
                    <SideNavItem waves>Daigasso! DX</SideNavItem>
                </Link>
                <Link to='/gamevideo'>
                    <SideNavItem waves>Game Videos</SideNavItem>
                </Link>
                <Link to='/mrblog'>
                    <SideNavItem waves>Mr. Blog</SideNavItem>
                </Link>
            </SideNav>
        );
    }
}

export default withCookies(Sidebar);