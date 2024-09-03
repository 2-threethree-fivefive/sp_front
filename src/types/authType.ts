export interface SignInInputType {
  text: string;
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
