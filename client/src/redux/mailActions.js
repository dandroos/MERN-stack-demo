import { MAIL_SENDING, MAIL_SENT } from "./actionTypes";
import axios from "axios";

export const sendMail = data => dispatch => {
  dispatch({
    type: MAIL_SENDING
  });
  axios.post("/api/email", data, null).then(res =>
    dispatch({
      type: MAIL_SENT
    })
  );
};
