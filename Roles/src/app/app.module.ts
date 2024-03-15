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
import { AgregarEventoComponent } from './components/agregar-evento/agregar-evento.component';
import { OrdenGeneroComponent } from './components/orden-genero/orden-genero.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Swiper } from 'swiper';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';


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
    AgregarEventoComponent,
    OrdenGeneroComponent,
    LoginComponent,
    FooterComponent,
    CursoDetalleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [FilterPipe, Swiper],
  bootstrap: [AppComponent]
})
export class AppModule { }
