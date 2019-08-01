import { combineReducers } from "redux";
import documentsReducer from "./documentsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import mailReducer from "./mailReducer";

export default combineReducers({
  documents: documentsReducer,
  auth: authReducer,
  error: errorReducer,
  mail: mailReducer
});
