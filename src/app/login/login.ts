import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../core/services/auth'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {
  loginError: boolean = false;

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  private authService = inject(Auth);
  private router = inject(Router);

  async onLogin(): Promise <void> {
    const { user, password } = this.loginForm.value;
    const success = await this.authService.login(user!, password!);
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
  async onRegister(): Promise<void> {
    const { user, password } = this.loginForm.value;
    const success = await this.authService.register(user!, password!);

    if (success) {
      alert('User created! You can login now.');
      this.loginForm.reset();
    } else {
      alert('Error creating user.');
    }
  }
}
