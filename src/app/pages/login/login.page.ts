import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/app/components/login/login.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    LogoComponent,
    MessagesComponent
  ],
  providers: [MessagesService],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {}
