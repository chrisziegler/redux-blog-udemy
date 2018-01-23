// we don't need to specify a file when importing from the index
import _ from 'lodash';
import { FETCH_POSTS } from  '../actions';

// default to an object for state for init
// following our object modelled sdata structure for state
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
     return _.mapKeys(action.payload.data, 'id');
    default:
    return state;
  }
}