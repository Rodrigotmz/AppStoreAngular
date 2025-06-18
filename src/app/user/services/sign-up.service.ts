import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from '../interfaces/signup-request.interface';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../interfaces/singup-response.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpRequest): Observable<SignUpResponse> {
    const url = `${this.baseUrl}/customers`;
    return this.http.post<SignUpResponse>(url, signUpData);
  }
}
