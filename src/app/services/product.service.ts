import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, shareReplay, tap } from "rxjs";
import { IProduct } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private subject: BehaviorSubject<IProduct[]>;

  public products$: Observable<IProduct[]>;

  constructor(
    private http: HttpClient
  ) {
    this.subject = new BehaviorSubject<IProduct[]>([]);
    this.products$ = this.subject.asObservable();

    this.loadAllProducts()
      .subscribe();
  }

  public loadAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products')
      .pipe(
        map(response => response['payload']),
        tap(products => this.subject.next(products)),
        shareReplay()
      )
  }
}