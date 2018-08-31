import { createActions } from 'redux-actions';
import * as api from "../../lib/api";

export const LOAD_POSTS = "LOAD_POSTS";
export const CREATE_COMMENT = "CREATE_COMMENT";

export const {
  loadPosts,
  createComment
} = createActions(
  LOAD_POSTS,
  CREATE_COMMENT
);

export const fetchPosts = (query) =>
  dispatch =>
    api
      .fetchPosts(query)  
      .then(({ data }) => dispatch(loadPosts(data.posts)))
      .catch(err => dispatch(loadPosts(err)));

export const addComment = (values) =>
  dispatch =>
    api
      .createComment(values)
      .then(({ data }) => dispatch(createComment(data.comments)))
      .catch(err => dispatch(createComment(err)))

// // 1
// api.getComments()
//   .then((res) => dispatch(getCommentsSuccess(res)))
//   .catch((error) => dispatch(getCommentsFailure(error)))

//   {
//     type: 'ACTION_SUCESS' | 'FAILURE'
//     payload: null
//   }

// // 2
// api.getComments()
//   .then((res) => dispatch(getComments(res)))
//   .catch((error) => dispatch(getComments(error)))

//   {
//     type: 'ACTION'
//     payload: {},
//   }

//   {
//     type: 'ACTION'
//     error: {}
//   }


// const red = (state, action) => {
//   switch action.type {
//     case 'ACTION': {
//       if (action.error) {
//         return {...state, error: action.error}
//       } else {
//         return {...state, error: null, data: action.payload}
//       }
//     }
//   }
// }

// const createComment = (...) => {
//   return api.createComment().then((res) => {
//     return {
//       type: ...,
//       payload: ...
//     }
//   })
// }

// const createComment = (...) => {
//   return dispatch => {
//     api.createComment().them(...).catch(...)
//   }
// }
