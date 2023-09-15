export interface IUser {
  id: number;
  email: string;
}

export interface IAuthenticateRequest {
  email: string;
  password: string;
}