import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./src/features/posts/reducer";
import usersReducer from "./src/features/users/reducer";

const rootReducer = combineReducers({
  posts: postsReducer, 
  users: usersReducer,
  form: formReducer
});

export default rootReducer;
