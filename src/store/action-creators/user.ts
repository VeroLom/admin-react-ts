import {Dispatch} from "redux";
import {UserAction, UserActionTypes} from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS_REQUEST});
            const response = await axios.get("http://localhost:3333/users");
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_FAIL, payload: "Error"})
        }
    }
}