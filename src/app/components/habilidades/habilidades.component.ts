import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faXmark, faCheck, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  faPen = faPen;
  faCheck = faCheck;
  faPlus = faPlus;
  faXmark = faXmark;
  habilidades: any;

  constructor( private datosPortfolio: PortfolioService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos()
    .subscribe( data => this.habilidades = data.habilidades );
  }

}
