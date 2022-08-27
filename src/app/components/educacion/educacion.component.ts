import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPen = faPen;
  faPlus = faPlus;
  faXmark = faXmark;
  public educacionList: Educacion[]= [];
  public editEducacion: Educacion | undefined;
  public deleteEducacion: Educacion | undefined; 



  constructor(private educService: EducacionService) { }

  ngOnInit(): void {
    this.getEduc();
  }

  public getEduc(): void {
    this.educService.getEduc().subscribe({
      next: (Response: Educacion[]) => {
        this.educacionList= Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, educacion?: Educacion): void {
    const container= document.getElementById('main-container');
    const button= document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add') {
      button.setAttribute('data-target', '#addEducationModal');
    }else if(mode==='delete') {
      this.deleteEducacion= educacion;
      button.setAttribute('data-target', '#deleteEducationModal');
    }else if(mode==='edit') {
      this.editEducacion= educacion;
      button.setAttribute('data-target', '#editEducationModal');
    }
    container?.appendChild(button); 
    button.click();
  }

  public onAddEducation(addForm: NgForm) {
    document.getElementById('add-education-form')?.click();
    this.educService.addEduc(addForm.value).subscribe({
      next:(response: Educacion) => {
        console.log(response);
        this.getEduc();
        addForm.reset();
      },
      error:(error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset;
      }
    })
  }

  public onUpdateEducation(educacion: Educacion) {
    this.editEducacion= educacion;
    document.getElementById('edit-education-form')?.click();
    this.educService.updateEduc(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEduc();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onDeleteEducation(idEdu: number): void {
    this.educService.deleteEduc(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEduc();
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }

}
