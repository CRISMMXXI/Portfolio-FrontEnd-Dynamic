import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private apiServerUrl= environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

 

  public getAdmin(): Observable<Administrador> {
    return this.http.get<Administrador>(`${this.apiServerUrl}/api/administrador/id/1`);
  }


}
