import { Component } from '@angular/core';
import { AuthService } from '../user/services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../user/interfaces/login-response.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userFullName: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const loginResponse: LoginResponse | null = this.authService.getLoginResponse();

    // Verificar si el usuario ha iniciado sesión y obtener el nombre completo si es así
    if (loginResponse && this.authService.isLoggedIn()) {
      const { firstName, lastName } = loginResponse.user;
      this.userFullName = `${firstName} ${lastName}`;
    }
  }
}
