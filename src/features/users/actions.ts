import { createActions } from 'redux-actions';
import * as api from "../../lib/api";

export const CREATE_USER = "CREATE_USER";

export const {
  createUser
} = createActions(
  CREATE_USER
);

export const submitUser = (values) =>
  dispatch =>
    api
      .graphqlRequest(values)
      .then(({ data }) => dispatch(createUser(data.createUser)))
      .catch(err => dispatch(createUser(err)))