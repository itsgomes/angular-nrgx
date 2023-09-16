import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";

import { ToastComponent } from "../toaster/toast.component";
import { ToastService } from "src/app/services/toast.service";
import { IToast } from "src/app/models/toast.model";

@Component({
  selector: 'toaster-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastComponent
  ],
  templateUrl: './toaster.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent implements AfterViewInit {
  @Input()
  public toast$!: Observable<IToast>;
  public toastList: IToast[] = [];

  constructor(
    private toastService: ToastService, 
    public cdr: ChangeDetectorRef
  ) {}

  public ngAfterViewInit(): void {
    this.toastService.toast$
      .subscribe({
        next: (toast: IToast) => {
          this.toastList.push(toast);
          this.cdr.detectChanges();
        }
      });
  }

  public close(index: number): void {
    this.toastList.splice(index, 1);
    this.cdr.detectChanges();
  }
}