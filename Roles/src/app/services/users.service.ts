import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private baseUrl: string;


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
}
