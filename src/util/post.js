import axios from 'axios';

export function loadNextPost(type, skip) {
    return axios.get(`https://octopusfantasy-server.herokuapp.com/${type}`, {
        params: {
            skip: skip
        }
    });
}
