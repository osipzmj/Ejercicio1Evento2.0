import { Curso } from '../models/curso';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:4000/curso/';

  constructor(private http: HttpClient) { }

  getCurso(): Observable<any> {

    return this.http.get(this.url, this.crearHeaders());  
  }

  eliminarCurso(id: string): Observable<any>{
    return this.http.delete(this.url + id, this.crearHeaders());
  }

  guardarCurso(area: Curso): Observable<any>{
    return this.http.post(this.url, Curso, this.crearHeaders());
  }

  obtenerCurso(id: string): Observable<any>{
    return this.http.get(this.url + id, this.crearHeaders());
  }

  editarCurso(id: string, area: Curso): Observable<any>{
    return this.http.put(this.url + id, Curso, this.crearHeaders());
  }

  crearHeaders(){
    return{
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token-cursos')!
      })
    }
  }
}
