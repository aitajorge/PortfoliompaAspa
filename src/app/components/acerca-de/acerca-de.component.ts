import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaDe:any;
  constructor (private datosPortfolio: PortfolioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.acercaDe=data;
    });  
 }
}
