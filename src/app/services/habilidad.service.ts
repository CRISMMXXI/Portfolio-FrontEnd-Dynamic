import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getHab(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(`${this.apiServerUrl}/habilidad/ver`);
  }

  public addHab(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(`${this.apiServerUrl}/habilidad/crear`, habilidad);
  }

  public editHab(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.put<Habilidad>(`${this.apiServerUrl}/habilidad/editar/${habilidad.idHab}`, habilidad);
  }

  public deleteHab(idHab: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/habilidad/eliminar/${idHab}`);
  }

}
