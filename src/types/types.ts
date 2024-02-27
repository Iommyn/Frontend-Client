export interface IUser {
    email?: string
    token: string
    refreshToken?: string
    tokenExpiration?: string
}

export interface IUserData {
    email?: string
    password: string
    username: string
}

export interface IResponseUser {
    email: string
    ip: string
    isAdmin: string
    oldPassword: string
    regData: number
    username: string
    password: string
}


export interface IResponseUserData {
    token: string
    user: IResponseUser
}