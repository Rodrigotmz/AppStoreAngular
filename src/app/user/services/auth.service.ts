import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  private storageKey = 'isLoggedIn'; // Clave para almacenar en localStorage
  private responseKey = 'loginResponse'; // Clave para almacenar el objeto LoginResponse
  private expirationKey = 'loginResponseExpiration'; // Clave para almacenar la fecha de expiración

  private expirationTimer: any;
  constructor(private http: HttpClient) {
    this.initExpirationTimer();
  }
  login() {

  }
  //Metodo para verificar si el usuario a iniciado sesión y si los datos no han expirado
  isLoggedIn() {

  }

  //Método para obtener el objeto LoginResponse almacenado en localStorage si no ha expirado
  getLoginResponse() {

  }

  //Método para cerrar seión (eliminar los valores almacenados)
  logout() {

  }
  //Iniciar el temporizador de expiracion para limpiar automaticamente los datos cuando expire la sesión
  private initExpirationTimer(): void {
    //Limpiar el temporizador si ya esta activo
    this.clearExpirationTimer();
    // Obtener la fecha de expiración del localStorage
    const expiration = localStorage.getItem(this.expirationKey);
    if (expiration) {
      const expirationTime = parseInt(expiration, 10); // Convertir el timestamp almacenado a número entero

      // Calcular el tiempo restante hasta la expiración
      const expiresIn = expirationTime - Date.now();
      if (expiresIn > 0) {
        // Configurar el temporizador para limpiar los datos cuando expire la sesión
        this.expirationTimer = setTimeout(() => {
          this.logout(); // Llamar al método logout() cuando expire la sesión
        }, expiresIn);
      }
    }
  }
  // Limpiar el temporizador de expiración
  private clearExpirationTimer(): void {
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
      this.expirationTimer = null;
    }
  }
}
