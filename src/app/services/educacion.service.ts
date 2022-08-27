import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServerUrl= environment.apiBaseUrl; 


  constructor(private http: HttpClient) { }
   

  public getEduc(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/ver`);
  }

  public addEduc(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/crear`, educacion);
  }

  public updateEduc(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/editar/${educacion.idEdu}`, educacion);
  }

  public deleteEduc(idEdu: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/eliminar/${idEdu}`);
  }

  
}
