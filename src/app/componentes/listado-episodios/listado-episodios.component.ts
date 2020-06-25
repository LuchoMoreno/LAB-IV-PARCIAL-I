import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// IMPORTO EL SERVICIO.
import {HttpService} from '../../servicios/http.service'

// GRIS
import {MatGridListModule} from '@angular/material/grid-list';

// TABLAS
import {MatTableModule} from '@angular/material/table';


// IMPORTAR TODO.
@Component({
  selector: 'app-listado-episodios',
  templateUrl: './listado-episodios.component.html',
  styleUrls: ['./listado-episodios.component.scss']
})
export class ListadoEpisodiosComponent implements OnInit {

  listado : any[]=[];
  episodio : any;

  verDetalleFlag= false;

  displayedColumns: string[] = ['temporada', 'nombre'];


  constructor(private Router : Router,
  private http : HttpService) { }

  ngOnInit(): void {



  } 


  verDetalle(episodio)
  {
    this.verDetalleFlag = true;
    this.episodio = episodio;
    this.Router.navigate(['/listadoEpisodios/detalleEpisodios/']);

  }


  cambiarSerie(serieElegida : string)
  {

    if (serieElegida == "bb")
    {

      this.http.getAPIEpisodiosBB()
      .subscribe((data: Array<any>) => {
          console.log(data);
          this.listado = data;
          
      }, error => {
          console.log(error);
      });
  

    }
    
    if (serieElegida == "bcs")
    {

      this.http.getAPIEpisodiosBCS()
      .subscribe((data: Array<any>) => {
          console.log(data);
          this.listado = data;
          
      }, error => {
          console.log(error);
      });

    }


  }

}
