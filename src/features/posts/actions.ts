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
      .graphqlRequest(query)
      .then(({ data }) => dispatch(loadPosts(data.posts)))
      .catch(err => dispatch(loadPosts(err)));

export const addComment = (values, postId) =>
  dispatch =>
    api
      .graphqlRequest(values)
      .then(({ data }) => dispatch(createComment({ 
        comment: data.createComment, 
        postId 
      })))
      .catch(err => dispatch(createComment(err)))
