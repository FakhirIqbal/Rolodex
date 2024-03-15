// actions.js
import axios from "axios";
// import { setUserDetail } from './userDetailActions'; // Assuming you have an action to set user details
import { setUserDetail } from "../reducers/userslice";
import { GetUser } from "../../../components/userToken";
import { Dispatch } from "redux";
import { Api } from "../../api";
export const FetchUserData = () => {
  return (dispatch: Dispatch) => {
    if (GetUser()?._id) {
      axios
        .get(Api + "/users/" + GetUser()?._id)
        .then((response) => {
          dispatch(setUserDetail(response.data.data));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  };
};
