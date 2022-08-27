import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Administrador } from 'src/app/models/administrador';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faPen = faPen;
  public administrador: Administrador | undefined;


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  public getAdmin(): void {
    this.headerService.getAdmin().subscribe(data => this.administrador= data);
  }
 

}
