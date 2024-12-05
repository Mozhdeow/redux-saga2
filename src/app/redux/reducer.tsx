import *as types from './actionTypes'
import {UsersAction, UsersState} from "./actionTypes";

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (
    state = initialState, action:any)
    : UsersState => {
    switch (action.type) {
        case types.LOAD_USERS_START:
            return {
                ...state, loading: true
            }
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state, loading: false, users: action.payload
            }
        case types.LOAD_USERS_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state
    }
}

export default usersReducer()