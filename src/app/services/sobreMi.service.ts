import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrador } from '../models/administrador';


@Injectable({
  providedIn: 'root'
})
export class SobreMiService {

  private apiServerUrl= environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

 

  public getAdmin(): Observable<Administrador> {
    return this.http.get<Administrador>(`${this.apiServerUrl}/api/administrador/id/1`);
  }

  public editAdmin(administrador: Administrador): Observable<Administrador> {
    return this.http.put<Administrador>(`${this.apiServerUrl}/api/administrador/editar/${administrador.id}`, administrador);
  }
 

}

