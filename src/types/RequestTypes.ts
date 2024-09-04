export interface SignUpRequestType {
  id: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePwRequestType {
  password: string;
  confirmPassword: string;
}
