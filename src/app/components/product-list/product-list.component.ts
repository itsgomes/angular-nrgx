import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostListener, Input } from "@angular/core";
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
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  @HostListener('scroll', ['$event'])
  private onScroll(event: any) {

    if (!event.target)
      return;

    if (event.target.scrollTop > 100)
      this.showUpButton = true;
    else
      this.showUpButton = false;
  }

  @Input()
  public products: IProduct[];

  public showUpButton: boolean = false;

  protected performanceUtils: typeof PerformanceUtils = PerformanceUtils;

  constructor () {}

  public scrollToTop(target: any): void {
    target.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }
}