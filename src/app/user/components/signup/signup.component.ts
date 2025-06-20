import { Component } from '@angular/core';
import { SignUpRequest } from '../../interfaces/signup-request.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  signup() {
    if (this.form.invalid) {
      return;
    }

    const signUpData: SignUpRequest = this.form.value as SignUpRequest;

    this.signUpService.signUp(signUpData).subscribe({
      next: () => {
        this.showSnackBar('Registro exitoso');
        this.router.navigate(['home']);
      },
      error: () => {
        this.showSnackBar('Error en el registro. Por favor, intenta de nuevo.');
      }
    });
  }


  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
