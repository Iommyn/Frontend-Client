export interface IUser {
    email?: string
    token: string
    refreshToken?: string
}

export interface IUserData {
    email?: string
    password: string
    username: string
}

export interface IUserDataRecovery {
    code?: string
    password?: string
    username?: string
    email?: string
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