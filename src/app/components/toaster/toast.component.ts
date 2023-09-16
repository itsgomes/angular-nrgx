import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { Subscription, timer } from "rxjs";

import { IToast, IToastType } from "src/app/models/toast.model";

@Component({
  selector: 'toast-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <ng-container *ngIf="toast">
      <div class="toast-header">
        <strong class="me-auto">{{toast.title}}</strong>
        <button type="button" class="btn-close" aria-label="Close" (click)="close()"></button>
      </div>
      <div class="toast-body rounded-1 rounded-top-0" [ngClass]="{'text-bg-success': toast.type == 0, 'text-bg-danger': toast.type == 1, 'text-bg-warning': toast.type == 2}">
        {{toast.body}}
      </div>
    </ng-container>
  `
})
export class ToastComponent implements AfterViewInit, OnDestroy {
  private timerSubscription!: Subscription;

  @Input()
  public toast!: IToast;

  @Output()
  public onClose: EventEmitter<void> = new EventEmitter<void>();

  public get toastType() { return IToastType; }

  constructor() {}

  public ngAfterViewInit(): void {
    this.timerSubscription = timer(this.toast.delay | 3000)
      .subscribe(() => this.onClose.next())
  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  public close(): void {
    this.timerSubscription.unsubscribe();
    this.onClose.next();
  }
}