import { combineReducers } from 'redux';
// import header from './header';
import post from './post';
import user from './user';

export default combineReducers({ post, user });