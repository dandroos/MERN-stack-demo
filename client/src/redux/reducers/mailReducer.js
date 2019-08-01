import { MAIL_SENDING, MAIL_SENT, RESET_FORM } from "../actionTypes";

const initialState = {
  mailSending: false,
  mailSent: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAIL_SENDING: {
      return {
        ...state,
        mailSending: true
      };
    }
    case MAIL_SENT: {
      return { ...state, mailSending: false, mailSent: true };
    }
    case RESET_FORM: {
      return initialState;
    }
    default:
      return state;
  }
};
