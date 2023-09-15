export interface IMessage {
  severity: IMessageSeverity;
  text: string;
}

export enum IMessageSeverity {
  Error,
  Warn
}