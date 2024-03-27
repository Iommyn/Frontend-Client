export interface IUser {
  email: string;
  token: string;
  username: string;
}

export interface IUserData {
  email: string;
  password: string;
  username: string;
  oldPassword: string;
  newPassword: string;
  user: {
    username: string;
  };
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
}


export interface IUserDataRecovery {
  code: string;
  password: string;
  username: string;
  email: string;
}

export interface IResponseUser {
  email: string;
  ip: string;
  isAdmin: string;
  oldPassword: string;
  regData: number;
  username: string;
  password: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}
