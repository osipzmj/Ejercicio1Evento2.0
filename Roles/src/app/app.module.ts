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
import { AreaInteresComponent } from './components/area-interes/area-interes.component';
import { AgregarEventoComponent } from './components/agregar-evento/agregar-evento.component';
import { OrdenGeneroComponent } from './components/orden-genero/orden-genero.component';
import { LoginComponent } from './login/login.component';


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
    AreaInteresComponent,
    AgregarEventoComponent,
    OrdenGeneroComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
