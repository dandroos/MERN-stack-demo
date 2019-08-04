// import {
//   CHECKING_USER,
//   USER_AUTHORISED,
//   USER_NOT_AUTHORISED
// } from "./actionTypes";

// import axios from "axios";

// import { tokenConfig } from "./authActions";

// export const checkUser = (userLoggedIn) => (dispatch, getState)=>{
//     if(userLoggedIn){
//         axios.get(`/api/account/${userLoggedIn.id}`)

//     }else{
//         dispatch({
//             type: USER_NOT_AUTHORISED
//         })

//     }
// }