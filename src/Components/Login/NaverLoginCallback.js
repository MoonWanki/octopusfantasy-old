import React, { Component } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

class NaverLoginCallback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }
    

    componentDidMount() {

        this.getAccessToken();

    }

    setUserdataToCookie = (data) => {
        const { cookies } = this.props;
        const date = new Date();
        date.setDate(date.getDate + 1);

        const userdata = {
            id: data.response.id,
            nickname: data.response.nickname,
            profileImage: data.response.profile_image
        }
        cookie.save('userdata', userdata, { path: '/', expires: date, domain: '.octopusfantasy.com' });
    }

    getAccessToken = async () => {
        
        const tokenResponse = await axios.get(`https://server.octopusfantasy.com/naverapi/access_token${this.props.location.search}`);

        if(tokenResponse.status!==200) {
            return;
        }

        const profileResponse = await axios.get(`https://server.octopusfantasy.com/naverapi/profile`,
            {params: {access_token: tokenResponse.data.access_token}});

        if(profileResponse.status!==200) {
            return;
        }

        this.setUserdataToCookie(profileResponse.data);

        this.setState({ done: true });

    }

    render() {


        return (
            <div style={{width: '100%', height: '100%'}}>
                {this.state.done
                    ? <Redirect to='/' />
                    :
                    <Dimmer active inverted>
                        <Loader size='large'/>
                    </Dimmer>
                }
            </div>
        );
    }
}

export default NaverLoginCallback;