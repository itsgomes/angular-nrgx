import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { IProduct } from "src/app/models/product.model";

@Component({
  selector: 'product-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input()
  public products: IProduct[];

  constructor (
  ) {}
}