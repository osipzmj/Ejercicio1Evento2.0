import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:4000/usuario/';
  url2 = 'http://localhost:4000/usuario/cuenta';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);  
  }

  eliminarUsuario(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  obtenerUsuario(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url + id, usuario);
  }

  contarUsuario(id: string): Observable<any>{
    return this.http.get(this.url2 + id);
  }

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
  
}