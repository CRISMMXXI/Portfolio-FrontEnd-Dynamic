import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  faPen = faPen;
  miPortfolio: any;

  constructor( private datosPortfolio: PortfolioService ) { }

  ngOnInit(): void {
this.datosPortfolio.obtenerDatos()
.subscribe( data => this.miPortfolio = data);
  }

}
