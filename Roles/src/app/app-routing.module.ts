import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaRegistroComponent } from './components/lista-registro/lista-registro.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursoComponent } from './components/curso/curso.component';
import { OrdenGeneroComponent } from './components/orden-genero/orden-genero.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< Updated upstream
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
=======
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
//import { AdminGuard } from './guard/admin.guard';
>>>>>>> Stashed changes

const routes: Routes = [
  {path:'',redirectTo:'/principal',pathMatch:'full'},
  {path:'principal',component:PrincipalComponent},
  {path:'registro',component:RegistroComponent},
  {path:'registro/:id',component:RegistroComponent},
  {path:'lista-registro',component:ListaRegistroComponent},
  {path:'crear-curso/:id',component:CrearCursoComponent},
  {path:'crear-curso',component:CrearCursoComponent},
 //{path:'crear-curso',component:CrearCursoComponent, canActivate: [AdminGuard]},
  {path:'cursos',component:CursoComponent},
  {path:'orden',component:OrdenGeneroComponent}, 
  {path: "login", component: LoginComponent, pathMatch: "full" },
  { path: 'cursos/:_id', component: CursoDetalleComponent },
  { path: '**', component:PaginaErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [GestionComponent,]
