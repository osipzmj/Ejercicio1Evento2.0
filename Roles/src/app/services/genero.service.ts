import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  url = 'http://localhost:4000/genero/';
  url2 = 'http://localhost:4000/genero/f';
  
  constructor(private http: HttpClient) { }

  getGenero(genero: string): Observable<any> {
    const params = new HttpParams().set('genero', genero);
    return this.http.get<Usuario[]>(this.url, { params }).pipe(
      tap(data => console.log('Usuarios encontrados:', data)),
      catchError(error => {
        console.log('Error al obtener usuarios:', error);
        return throwError(error);
      })
    );
  }

  getGeneroF(genero: string): Observable<any> {
    const params = new HttpParams().set('genero', genero);
    return this.http.get<Usuario[]>(this.url2, { params }).pipe(
      tap(data => console.log('Usuarios encontrados:', data)),
      catchError(error => {
        console.log('Error al obtener usuarios:', error);
        return throwError(error);
      })
    );
  }

  // Método para obtener los usuarios ordenados
  // getUsuariosOrdenados( filtro:string, area:string): Observable<Usuario[]> {
  //   const params = new HttpParams()

  //     .set('filtro', filtro)
  //     .set('area', area);
  //   return this.http.get<Usuario[]>(this.url, { headers, params });
  // }
}
