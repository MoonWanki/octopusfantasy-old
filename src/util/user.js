import axios from 'axios';

export function loadProfileById(id) {
    return axios.get(`https://octopusfantasy-server.herokuapp.com/user/${id}`);
}
