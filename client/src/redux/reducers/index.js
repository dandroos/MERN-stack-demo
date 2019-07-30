import { combineReducers } from "redux";
import documentsReducer from "./documentsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({ 
    documents: documentsReducer,
    auth: authReducer,
    error: errorReducer
});
