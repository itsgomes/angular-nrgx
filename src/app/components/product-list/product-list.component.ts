import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IProduct } from "src/app/models/product.model";
import { PerformanceUtils } from "src/app/utils/performance-utils";

@Component({
  selector: 'product-list-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input()
  public products: IProduct[];

  protected performanceUtils: typeof PerformanceUtils = PerformanceUtils;

  constructor (
  ) {}
}