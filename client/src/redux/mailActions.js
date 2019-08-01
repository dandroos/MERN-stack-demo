import { MAIL_SENDING, MAIL_SENT, RESET_FORM, MAIL_NOT_SENT } from "./actionTypes";
import { returnErrors } from "./errorActions";
import axios from "axios";

export const sendMail = data => dispatch => {
  dispatch({
    type: MAIL_SENDING
  });
  axios
    .post("/api/email", data, null)
    .then(res =>
      dispatch({
        type: MAIL_SENT
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, MAIL_NOT_SENT)
      );
      dispatch({
        type: MAIL_NOT_SENT
      });
    });
};

export const resetForm = () => dispatch => {
  dispatch({
    type: RESET_FORM
  });
};
