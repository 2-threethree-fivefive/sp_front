export interface SignInInputType {
  text: string;
  value: string;
  name: string;
  setValue: (value: string) => void;
  clearValue: () => void;
}
