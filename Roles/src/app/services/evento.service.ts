import { Injectable } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  url = 'http://localhost:4000/evento/';
  
  constructor(private http: HttpClient) { }

  getEvento(): Observable<any> {
    return this.http.get(this.url);  
  }

  eliminarEvento(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarEvento(evento: Evento): Observable<any>{
    return this.http.post(this.url, evento);
  }

  obtenerEvento(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarEvento(id: string, evento: Evento): Observable<any>{
    return this.http.put(this.url + id, evento);
  }
}

