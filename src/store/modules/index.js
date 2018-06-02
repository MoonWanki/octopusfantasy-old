import { combineReducers } from 'redux';
import header from './header';
import contents from './contents';

export default combineReducers({
  header, contents
});