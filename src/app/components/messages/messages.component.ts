import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Observable, tap, timer } from "rxjs";

import { IMessage } from "src/app/models/message.model";
import { MessagesService } from "src/app/services/messages.service";

@Component({
  selector: 'messages-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
    trigger('slideInTop', [
      transition(':enter', [
        style(
          { transform: 'translateY(150%)' }
          ),
        animate('300ms ease-out', style({ transform: 'translateY(0)' })),
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  @Input()
  public messageTimer: number = 2000;
  public hasMessages: boolean = false;
  public messages$!: Observable<IMessage[]>;

  constructor(
    private messagesService: MessagesService, 
    public cd: ChangeDetectorRef
  ) {
    this.messages$ = this.messagesService.messages$
      .pipe(
        tap(() => {
          this.hasMessages = true;
          this.startMessageLife();
          this.cd.markForCheck();
        })
      );
  }

  public close(): void {
    this.hasMessages = false;
    this.cd.markForCheck();
  }

  private startMessageLife(): void {
    timer(this.messageTimer).subscribe(() => { 
      this.hasMessages = false;
      this.cd.markForCheck();
    });
}
}