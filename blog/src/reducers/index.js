import { combineReducers } from 'redux';
import postsReducers from './postsReducers';
import user from './userReducers';


export default combineReducers({
  posts: postsReducers
  user: userReducers
});
