import { handleActions } from 'redux-actions';
import { LOAD_POSTS, CREATE_COMMENT } from './actions';

const initState = {
  posts: [],
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
      const postId = action.payload.postId;
      state.posts.map(post => {
        if (post.id === postId) {
          return post.comments.push(action.payload.comment);
        }
      });
      return {
        ...state,
        posts: [...state.posts],
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



