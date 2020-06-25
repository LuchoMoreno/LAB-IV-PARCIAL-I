import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RegistrosComponent } from './componentes/registros/registros.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

import { ListadoEpisodiosComponent } from './componentes/listado-episodios/listado-episodios.component';
import { DetallesEpisodiosComponent } from './componentes/detalles-episodios/detalles-episodios.component';


// GUARD.
import { GuardLoginGuard } from './guards/guard-login.guard';
import { AcercaComponent } from './componentes/acerca/acerca.component';


const routes: Routes = [ //constante routes del tipo routes

  {
    path: 'bienvenido', 
    component: BienvenidoComponent,
  },

  { path: '', pathMatch: 'full', redirectTo: 'bienvenido'},

  {
    path: 'login', component: LoginComponent 
  },


  {
    path: 'listado', component: ListadoComponent,
    children: [
     
      { path: 'detalle', component: DetallesComponent},
      { path: ':id', component: DetallesComponent}
    ],
    canActivate: [GuardLoginGuard],
    
  },


  {
    path: 'listadoEpisodios', component: ListadoEpisodiosComponent,
    children: [
     
      { path: 'detalleEpisodio', component: DetallesEpisodiosComponent},
      { path: ':id', component: DetallesEpisodiosComponent}
    ],
    canActivate: [GuardLoginGuard],
    
  },


  {
    path: 'favoritos', 
    component: FavoritosComponent,
    canActivate: [GuardLoginGuard], 
  },


  {
    path: 'acerca', 
    component: AcercaComponent,
  },
 
  {
    path: 'registro', 
    component: RegistrosComponent,
  },


  {
    path: 'menu', 
    component: MenuComponent,
    canActivate: [GuardLoginGuard],
  },


  {
    path: 'logout', component: LogoutComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
