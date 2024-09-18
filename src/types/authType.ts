export interface SignInInputType {
  text: React.ReactNode;
  value: string;
  name: string;
  setValue: (value: string) => void;
  clearValue: () => void;
}

export interface SignInLinkType {
  url: string;
  text: string;
}

export enum AuthenticationMethodType {
  SignUp = 'sign-up',
  SignIn = 'sign-in',
  FindId = 'find-id',
  FindPw = 'find-pw',
}

export interface SignUpFieldType {
  id: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
