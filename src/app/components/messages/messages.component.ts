import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Observable, tap } from "rxjs";

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
  ]
})
export class MessagesComponent {
  public showMessages: boolean = false;
  public messages$!: Observable<IMessage[]>;

  constructor(
    private messagesService: MessagesService
  ) {
    this.messages$ = this.messagesService.messages$
      .pipe(
        tap(() => this.showMessages = true)
      );
  }

  public close(): void {
    this.showMessages = false;
  }
}