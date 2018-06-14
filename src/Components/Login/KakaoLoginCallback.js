import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { Dimmer, Loader } from 'semantic-ui-react';
import kakao from 'util/api/kakao';
import * as qs from 'qs';

class KakaoLoginCallback extends Component {

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
            id: data.id,
            nickname: data.properties.nickname,
            profileImage: data.properties.thumbnail_image
        }

        cookies.set('userdata', userdata, {expires: date});
    }

    getAccessToken = async () => {
        
        const parsed = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            params: {
                'grant_type': 'authorization_code',
                'client_id': kakao.client_id,
                'redirect_uri': kakao.redirect_uri,
                'code': parsed.code
            },
            url: 'https://kauth.kakao.com/oauth/token',
        };
        const tokenResponse = await axios(options)

        if(tokenResponse.status!==200) {
            console.log(tokenResponse.statusCode);
            return;
        }

        const profileResponse = await axios.get(`https://server.octopusfantasy.com/kakaoapi/profile?access_token=${tokenResponse.data.access_token}`);

        this.setUserdataToCookie(profileResponse.data);
        this.setState({ done: true });

    }

    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                {this.state.done ? <Redirect to='/' /> : <Dimmer active inverted>
                        <Loader size='large'/>
                    </Dimmer>}
            </div>
        );
    }
}

export default withCookies(KakaoLoginCallback);