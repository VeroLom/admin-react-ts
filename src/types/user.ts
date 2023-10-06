export interface UserState {
    users: any[];
    isLoading: boolean;
    error: null | boolean;
}

export enum UserActionTypes {
    FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
}

interface FetchUsersRequestAction {
    type: UserActionTypes.FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersFailAction {
    type: UserActionTypes.FETCH_USERS_FAIL;
    payload: string;
}

export type UserAction = FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersFailAction;

