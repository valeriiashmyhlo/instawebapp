import { handleActions } from 'redux-actions';
import { CREATE_USER } from './actions';

const initState = {
  user: null
}

export default handleActions({
  [CREATE_USER]: {
    next: (state, action) => {
      console.log(action)
      return {
        ...state,
        user: action.payload,
        error: null
      }
    },
    throw: (state, action) => {
      return {
        ...state,
        error: 'There was a registration problem'
      }
    }
  }
}, initState)