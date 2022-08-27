import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faPen = faPen;
  faPlus = faPlus;
  faXmark = faXmark;
  proyectoList: Proyecto[]= [];
  editProyecto: Proyecto | undefined;
  deleteProyecto: Proyecto | undefined;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getProyecto();
  }

  public getProyecto(): void {
    this.proyectoService.getProyecto().subscribe(data => this.proyectoList= data);
  }

  public onOpenModal(mode: String, proyecto?: Proyecto): void {
    const container= document.getElementById('main-container');
    const button= document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add') {
      button.setAttribute('data-target', '#addProyectoModal');
    }else if(mode==='delete') {
      this.deleteProyecto= proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    }else if(mode==='edit') {
      this.editProyecto= proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }
    container?.appendChild(button); 
    button.click();
  }

  public onAddProyecto(addForm: NgForm) {
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.createProyecto(addForm.value).subscribe({
      next:(response: Proyecto) => {
        console.log(response);
        this.getProyecto();
        addForm.reset();
      },
      error:(error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset;
      }
    })
  }

  public onUpdateProyecto(proyecto: Proyecto) {
    this.editProyecto= proyecto;
    document.getElementById('edit-proyecto-form')?.click();
    this.proyectoService.editProyecto(proyecto).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onDeleteProyecto(idPro: number): void {
    this.proyectoService.deleteProyecto(idPro).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }


}
