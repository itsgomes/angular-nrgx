import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { HeaderComponent } from "src/app/components/header/header.component";
import { ProductListComponent } from "src/app/components/product-list/product-list.component";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProductListComponent
  ],
  templateUrl: './dashboard.page.html'
})
export class DashboardPage {
  constructor(
    public productService: ProductService
  ) {}
}