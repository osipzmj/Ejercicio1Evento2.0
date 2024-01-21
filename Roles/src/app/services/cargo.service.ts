import { Cargo } from './../models/cargo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  url = 'http://localhost:4000/cargo/';

  constructor(private http: HttpClient) { }

  getCargo(): Observable<any> {
    return this.http.get(this.url);  
  }

  eliminarCargo(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarCargo(cargo: Cargo): Observable<any>{
    return this.http.post(this.url, cargo);
  }

  obtenerCargo(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarCargo(id: string, cargo: Cargo): Observable<any>{
    return this.http.put(this.url + id, cargo);
  }
}
