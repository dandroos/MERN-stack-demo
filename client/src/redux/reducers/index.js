import { combineReducers } from "redux";
import guestbookReducer from "./guestbookReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import mailReducer from "./mailReducer";

export default combineReducers({
  documents: guestbookReducer,
  auth: authReducer,
  error: errorReducer,
  mail: mailReducer
});
