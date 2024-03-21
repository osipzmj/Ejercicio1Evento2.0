import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterRPipe } from './pipes/filter-r.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaRegistroComponent } from './components/lista-registro/lista-registro.component';
import { CursoComponent } from './components/curso/curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { OrdenGeneroComponent } from './components/orden-genero/orden-genero.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< Updated upstream
import { FooterComponent } from './footer/footer.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Swiper } from 'swiper';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
=======
import { FooterComponent } from './components/footer/footer.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
>>>>>>> Stashed changes

//import { AdminGuard } from './guard/admin.guard';
//import { AdminGuard } from './guard/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    // routingComponents,
    NavegacionComponent,
    PrincipalComponent,
    RegistroComponent,
    FilterPipe,
    FilterRPipe,
    ListaRegistroComponent,
    CursoComponent,
    CrearCursoComponent,
    OrdenGeneroComponent,
    LoginComponent,
    FooterComponent,
    CursoDetalleComponent,
    PaginaErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
   // NgbModule
  ],
<<<<<<< Updated upstream
  providers: [FilterPipe, Swiper],
=======
 // providers: [AdminGuard],
  providers: [],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
