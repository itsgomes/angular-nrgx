import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/app/components/login/login.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { ToasterComponent } from 'src/app/components/toaster/toaster.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    LogoComponent,
    ToasterComponent
  ],
  providers: [ToastService],
  templateUrl: './login.page.html'
})
export class LoginPage {}
