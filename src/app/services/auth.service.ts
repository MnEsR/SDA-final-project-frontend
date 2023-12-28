import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUser(arg0: User) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://your-backend-api-url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    // Send an HTTP POST request to your backend API for user registration
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  constructor() { 
    
  }
}
