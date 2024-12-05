import *as types from './actionTypes'
import {IUsers} from "./actionTypes";

export const loadUsersStart = () => ({
    type:types.LOAD_USERS_START
})

export const loadUsersSuccess = (users:IUsers) => ({
    type:types.LOAD_USERS_SUCCESS,
    payload: users
})

export const loadUsersError = (error:any) => ({
    type:types.LOAD_USERS_ERROR,
    payload: error
})




