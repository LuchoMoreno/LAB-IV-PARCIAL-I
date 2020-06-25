import {Component, OnInit, ViewChild} from '@angular/core';

import { Router } from '@angular/router';

// IMPORTO EL SERVICIO.
import {HttpService} from '../../servicios/http.service'

// GRIS
import {MatGridListModule} from '@angular/material/grid-list';

// TABLAS
import {MatTableModule} from '@angular/material/table';

// FAVORITOS
import { FavoritosService } from '../../servicios/favoritos.service'

// IMPORTAR TODO.




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {


  listado : any[]=[];
  persona : any;

  verDetalleFlag= false;

  displayedColumns: string[] = ['name', 'img'];

  listadoFavoritos : any[] = [];


  constructor(private Router : Router,
  private http : HttpService,
  private fvService : FavoritosService) { }

  
  ngOnInit(): void {



  } 


  verDetalle(persona)
  {
    this.verDetalleFlag = true;
    this.persona = persona;
    this.Router.navigate(['/listado/detalle/']);

  }



  cambiarSerie(serieElegida : string)
  {

    if (serieElegida == "bb")
    {

      this.http.getAPICompleta()
      .subscribe((data: Array<any>) => {
          console.log(data);
          this.listado = data;
          
      }, error => {
          console.log(error);
      });
  

    }
    
    if (serieElegida == "bcs")
    {

      this.http.getAPICompletaBetterCallSaul()
      .subscribe((data: Array<any>) => {
          console.log(data);
          this.listado = data;
          
      }, error => {
          console.log(error);
      });

    }
  }



  public guardarFavoritos(code: string)
  {
    const ret: number = this.fvService.añadirFavorito(code);
    if(ret === -1) //error
    {
      alert("ERROR");
    }

    else if(ret === 0) //agregado
    {
      alert("AGREGADO CON ÉXITO");
    }
    else if(ret === 1) //eliminado
    {
      alert("ELIMINADO CON ÉXITO");
    }
  }

}
