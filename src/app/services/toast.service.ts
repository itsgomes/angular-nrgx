import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";

import { IToast } from "../models/toast.model";

@Injectable()
export class ToastService {
  private subject: BehaviorSubject<IToast> = new BehaviorSubject<IToast>(null!);

  public toast$: Observable<IToast> = this.subject.asObservable()
    .pipe(
      filter(message => message != null)
    );
  
  constructor() {}

  public showToast(toast: IToast) {
    this.subject.next(toast);
  }
}