import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  host: { 'class': 'w-100' }
})
export class LoginComponent {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  public onSubmit(): void {
    if (this.form.invalid)
      return;

    const formValues = this.form.value;
    
    this.authService.authenticate(formValues)
      .subscribe(
        {
          next: () => this.router.navigateByUrl('/dashboard'),
          error: (err) => this.toastService.showToast({ title: 'Error', body: err.error.message ?? 'An unexpected error occurred, please try again.', type: 1, delay: 3000})
        }
      );
  }
}