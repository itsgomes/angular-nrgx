import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, shareReplay, tap } from "rxjs";

import { IAuthenticateRequest, IUser } from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null!);

  public user$: Observable<IUser> = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  public authenticate(request: IAuthenticateRequest): Observable<IUser> {
    return this.http.post<IUser>('/api/auth', request)
      .pipe(
        tap((user) => this.subject.next(user)),
        shareReplay()
      );
  }

  public logout(): void {
    this.subject.next(null!);
  }
}