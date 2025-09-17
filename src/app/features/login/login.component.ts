import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private builderForm = inject(FormBuilder);
  private router = inject(Router);

  public loginForm!: FormGroup;

  constructor() {
    this.loginForm = this.builderForm.group({
      user: ['', [Validators.required, Validators.minLength(6)]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    this.loginForm.markAllAsTouched();

    console.log(this.loginForm.invalid);
    if(this.loginForm.invalid) {
      return;
    }

    console.log("Listo para login: ", this.loginForm.value);
    this.router.navigateByUrl('/dashboard');
  }

}
