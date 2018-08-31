import { handleActions } from 'redux-actions';
import { LOAD_POSTS, CREATE_COMMENT } from './actions';

const initState = {
  posts: [],
  comments: [],
  error: null
};



export default handleActions({
  [LOAD_POSTS]: {
    next: (state, action) => {
      return {
        ...state,
        posts: action.payload,
        error: null
      }
    },
    throw: (state, action) => {
      return {
        ...state,
        error: 'There was a problem loading posts'
      }
    }
  },
  [CREATE_COMMENT]: {
    next: (state, action) => {
      return {
        ...state,
        comments: action.payload,
        error: null
      }
    },
    throw: (state, action) => {
      return {
        ...state,
        error: 'There was a problem creating your comment'
      }
    }
  }
}, initState);



