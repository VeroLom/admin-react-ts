import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS_REQUEST:
            return {...state, isLoading: true}

        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, isLoading: false, users: action.payload}

        case UserActionTypes.FETCH_USERS_FAIL:
            return {...state, isLoading: true}

        default:
            return state
    }
}