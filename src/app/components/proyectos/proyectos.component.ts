import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faXmark, faCheck, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faPen = faPen;
  faCheck = faCheck;
  faPlus = faPlus;
  faXmark = faXmark;
  misProyectos: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos()
      .subscribe(data => this.misProyectos = data.proyectos);
  }

}
