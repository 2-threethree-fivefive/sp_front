export interface commonResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: unknown;
}

export interface signUpIntroDataType {
  id: string;
  label: string;
}

export interface signUpIntroResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: signUpIntroDataType[];
}
