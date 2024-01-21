import { Area } from '../models/area';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  url = 'http://localhost:4000/area/';

  constructor(private http: HttpClient) { }

  getArea(): Observable<any> {
    return this.http.get(this.url);  
  }

  eliminarArea(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarArea(area: Area): Observable<any>{
    return this.http.post(this.url, area);
  }

  obtenerArea(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarArea(id: string, area: Area): Observable<any>{
    return this.http.put(this.url + id, area);
  }
}
