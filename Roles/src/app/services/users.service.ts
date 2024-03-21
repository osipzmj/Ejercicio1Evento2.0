import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, firstValueFrom } from "rxjs";
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isAdmin() {
    throw new Error('Method not implemented.');
  }
  private httpClient = inject(HttpClient);
  private baseUrl: string;


  // constructor(private jwtHelper: JwtHelperService) {
  //   this.baseUrl='http://localhost:4000/users';
  // }
  constructor() {
    this.baseUrl='http://localhost:4000/users';
  }

  registro(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/registro`,formValue)
    )
  }

  login(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`,formValue)
    )
  }
  // public getRole(): string | null {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const decodedToken = this.jwtHelper.decodeToken(token);
  //     return decodedToken.role;
  //   }
  //   return null;
  // }
}
