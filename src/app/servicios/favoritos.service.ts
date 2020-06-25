import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private llave = "favoritos";

  public listado: Array<any> = [];

  constructor() { }

  public añadirFavorito(codigo: string): number
  {
    try
    {
      let favs = localStorage.getItem(this.llave);

      if(!favs)
      {
        this.listado.push(codigo);
        localStorage.setItem(this.llave, JSON.stringify(this.listado));
        return 0; //item creado
      }
      
      try
      {
        let listaFavs = JSON.parse(favs);
        this.listado = listaFavs;
        this.listado.forEach(fav => {
          if(fav === codigo)
          {
            throw "estoy acá";
          }
        });
        this.listado.push(codigo);
        localStorage.setItem(this.llave, JSON.stringify(this.listado));
        return 0; //item actualizado
      }
      
      catch(error)
      {
        const index: number = this.listado.indexOf(codigo);

        if (index !== -1)
        {
          this.listado.splice(index, 1);
          localStorage.setItem(this.llave, JSON.stringify(this.listado));
          return 1; //fav eliminado
        }
      }
    }
    catch(error)
    {
      return -1; //hubo un error
    }
  }
}
