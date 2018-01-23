import { combineReducers } from 'redux';
import PostsReducer from './reducer_post';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
