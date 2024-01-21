import { Ciudad } from './../models/ciudad';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  url = 'http://localhost:4000/ciudad/';

  constructor(private http: HttpClient) { }

  getCiudad(): Observable<any> {
    return this.http.get(this.url);  
  }

  eliminarCiudad(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarCiudad(ciudad: Ciudad): Observable<any>{
    return this.http.post(this.url, ciudad);
  }

  obtenerCiudad(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarCiudad(id: string, ciudad: Ciudad): Observable<any>{
    return this.http.put(this.url + id, ciudad);
  }
}
