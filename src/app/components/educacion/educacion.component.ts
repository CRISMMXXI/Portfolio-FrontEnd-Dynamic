import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faXmark, faCheck, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPen = faPen;
  faCheck = faCheck;
  faPlus = faPlus;
  faXmark = faXmark;
  educacionList: any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos()
    .subscribe(data => this.educacionList = data.educacion);
  }

}
