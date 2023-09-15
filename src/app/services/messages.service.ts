import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";

import { IMessage } from "../models/message.model";

@Injectable()
export class MessagesService {
  private subject: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>(null!);

  public messages$: Observable<IMessage[]> = this.subject.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0)
    );
  
  constructor() {}

  public showMessages(messages: IMessage[]) {
    this.subject.next(messages);
  }
}