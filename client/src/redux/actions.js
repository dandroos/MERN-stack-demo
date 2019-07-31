import { GET_DOCUMENTS, INSERT_DOCUMENT, DELETE_DOCUMENT } from "./actionTypes";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getDocuments = () => dispatch => {
  axios.get("/api/documents").then(res =>
    dispatch({
      type: GET_DOCUMENTS,
      payload: res.data
    })
  );
};

export const insertDocument = data => (dispatch, getState) => {
  axios.post("/api/documents", data, tokenConfig(getState)).then(res =>
    dispatch({
      type: INSERT_DOCUMENT,
      payload: res.data
    })
  );
};

export const deleteDocument = id => dispatch => {
  axios.delete(`/api/documents/${id}`).then(res =>
    dispatch({
      type: DELETE_DOCUMENT,
      payload: id
    })
  );
};
