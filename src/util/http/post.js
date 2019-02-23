import axios from 'axios';

export const loadAllPosts = () => {
    return axios.get('https://server.octopusfantasy.com/post');
}

export const loadSinglePost = (pid) => {
    return axios.get(`https://server.octopusfantasy.com/post/${pid}`)
}