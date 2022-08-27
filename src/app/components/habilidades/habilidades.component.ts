import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  faPen = faPen;
  faPlus = faPlus;
  faXmark = faXmark;
  public habilidadList: Habilidad[]= [];
  public editHabilidad: Habilidad | undefined;
  public deleteHabilidad: Habilidad | undefined;

  constructor( private habService: HabilidadService ) { }

  ngOnInit(): void {
    this.getHab();
  }

  public getHab(): void {
    this.habService.getHab().subscribe(data => this.habilidadList=data);
  }

  public onOpenModal(mode: String, habilidad?: Habilidad): void {
    const container= document.getElementById('main-container');
    const button= document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add') {
      button.setAttribute('data-target', '#addHabilidadModal');
    }else if(mode==='delete') {
      this.deleteHabilidad= habilidad;
      button.setAttribute('data-target', '#deleteHabilidadModal');
    }else if(mode==='edit') {
      this.editHabilidad= habilidad;
      button.setAttribute('data-target', '#editHabilidadModal');
    }
    container?.appendChild(button); 
    button.click();
  }

  public onAddHabilidad(addForm: NgForm) {
    document.getElementById('add-habilidad-form')?.click();
    this.habService.addHab(addForm.value).subscribe({
      next:(response: Habilidad) => {
        console.log(response);
        this.getHab();
        addForm.reset();
      },
      error:(error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset;
      }
    })
  }

  public onUpdateHabilidad(habilidad: Habilidad) {
    this.editHabilidad= habilidad;
    document.getElementById('edit-habilidad-form')?.click();
    this.habService.editHab(habilidad).subscribe({
      next: (response: Habilidad) => {
        console.log(response);
        this.getHab();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onDeleteHabilidad(idHab: number): void {
    this.habService.deleteHab(idHab).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getHab();
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }


}
