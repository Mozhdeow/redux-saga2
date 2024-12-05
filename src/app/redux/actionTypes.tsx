export const LOAD_USERS_START = "LOAD_USERS_START";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_USERS_ERROR = "LOAD_USERS_ERROR";

export interface IUsers {
    id: number
    name: string
    phone: string
    email: string
    address: string
}

export type UsersState = {
    users: IUsers[]
    loading: boolean
    error: unknown | null
}

export type UsersAction = {
    user: IUsers
    payload: any
    type: any
}

export type DispatchType = (args: UsersAction) => UsersAction