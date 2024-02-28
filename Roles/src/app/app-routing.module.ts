import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaRegistroComponent } from './components/lista-registro/lista-registro.component';
import { AgregarEventoComponent } from './components/agregar-evento/agregar-evento.component';
import { AreaInteresComponent } from './components/area-interes/area-interes.component';
import { OrdenGeneroComponent } from './components/orden-genero/orden-genero.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/principal',pathMatch:'full'},
  {path:'principal',component:PrincipalComponent},
  {path:'registro',component:RegistroComponent},
  {path:'registro/:id',component:RegistroComponent},
  {path:'lista-registro',component:ListaRegistroComponent},
  {path:'agregar-evento/:id',component:AgregarEventoComponent},
  {path:'agregar-evento',component:AgregarEventoComponent},
  {path:'cursos',component:AreaInteresComponent},
  {path:'orden',component:OrdenGeneroComponent}, 
  {path: "login", component: LoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [GestionComponent,]
