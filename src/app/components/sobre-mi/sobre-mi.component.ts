import { Component, OnInit } from '@angular/core';
import { SobreMiService } from 'src/app/services/sobreMi.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Administrador } from 'src/app/models/administrador';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  public administrador: Administrador | undefined;
  public editAdministrador: Administrador | undefined;
  faPen = faPen;


  constructor( private datoService: SobreMiService ) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  public getAdmin():void {
    this.datoService.getAdmin().subscribe({
      next: (response: Administrador) =>{
        this.administrador= response;
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, administrador?: Administrador): void {
    const container= document.getElementById('main-container');
    const button= document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='edit') {
      this.editAdministrador= administrador;
      button.setAttribute('data-target', '#editAdministradorModal');
    }
    container?.appendChild(button); 
    button.click();
  }

  public onUpdateAdministrador(administrador: Administrador) {
    this.editAdministrador= administrador;
    document.getElementById('edit-administrador-form')?.click();
    this.datoService.editAdmin(administrador).subscribe({
      next: (response: Administrador) => {
        console.log(response);
        this.getAdmin();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
