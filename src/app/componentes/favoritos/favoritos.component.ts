import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor(private fvService : FavoritosService) { }


  listadoFavoritos;

  arrayFavoritos = [];

  displayedColumns: string[] = ['name'];


  ngOnInit(): void {


  this.listadoFavoritos = localStorage.getItem("favoritos").slice(1,-1);

  this.arrayFavoritos = this.listadoFavoritos.split(",");



  }


  probar()
  {
    (this.arrayFavoritos[2]);
  }



  



}
