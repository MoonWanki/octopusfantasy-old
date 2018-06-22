import React, { Component } from 'react';
import './UserInfo.scss';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import styled from 'styled-components';
import { Image, Confirm } from 'semantic-ui-react';

const LoginButton = styled.div`
    
    float: right;
    width: 77px;
    height: 30px;
    margin: 18px 0 0 0;
    padding: 4px 0 0 0;
    border: 1px solid;
    background: rgba(255, 255, 255, 0.15);
    text-align: center;
    
    border-color: ${props=>props.transparency ? 'white' : 'lightgray'};
    color: ${props=>props.transparency ? 'white' : 'gray'};

    &:hover {
        border-color: gray;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logoutDialog: false
        }
    }

    openDialog = () => this.setState({ logoutDialog: true });
    closeDialog = () => this.setState({ logoutDialog: false });

    handleLogout = () => {
        this.props.cookies.remove('userdata');
        window.location.reload();
    }
    
    render() {

        const { cookies, transparency } = this.props;
        const { openDialog, closeDialog, handleLogout } = this;

        return (
            <div>
                {cookies.get('userdata')
                ?
                    <div className='user-info-container' onClick={openDialog}>
                        <span className='user-info-nickname' style={transparency ? {color: 'white'} : {color: 'black'}}>
                            {cookies.get('userdata')["nickname"]}
                        </span>
                        <div className='user-info-profile-image'>
                            <Image avatar src={cookies.get('userdata')["profileImage"]} />
                        </div>
                        <Confirm
                            size='tiny'
                            open={this.state.logoutDialog}
                            content='로그아웃 하시겠습니까?'
                            onCancel={closeDialog}
                            onConfirm={handleLogout} />
                    </div>
                :
                    <Link to='/login'>
                        <LoginButton transparency={transparency}>로그인</LoginButton>
                    </Link>
                }
            </div>
        );
    }
}

export default withCookies(UserInfo);