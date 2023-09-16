export interface IToast {
  title: string
  body: string;
  type: IToastType;
  delay: number;
}

export enum IToastType {
  Success,
  Error,
  Warn
}