import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiServerUrl= environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/api/proyecto/ver`);
  }

  public createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServerUrl}/api/proyecto/crear`, proyecto);
  }

  public editProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.apiServerUrl}/api/proyecto/editar/${proyecto.idPro}`, proyecto);
  }
  
  public deleteProyecto(idPro: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/proyecto/eliminar/${idPro}`);
  }


}
