import axios from 'axios';

export function loadNextPost(type, skip, sort) {
    return axios.get(`https://server.octopusfantasy.com/post/${type}`, {
        params: {
            skip: skip,
            sort: sort
        }
    });
}
