import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { GeneroService } from './../../services/genero.service';
import { MongoClient } from 'mongodb';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-orden-genero',
  templateUrl: './orden-genero.component.html',
  styleUrls: ['./orden-genero.component.css']
})
export class OrdenGeneroComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  listUsuarios2: Usuario[] = [];
  listCurso: Curso[] = [];
  totalUsuarios: number | undefined;
  eventoForm: any;
  selectedCurso: string = '';
  filteredUsuarios: Usuario[] = [];
  

  constructor(private _generoService: GeneroService, 
   private  _cursoService: CursoService,
    private toastr:ToastrService ) { }

    ngOnInit() {
      const generoM = 'Masculino'; // Aquí puedes establecer el valor del género a buscar
      const generoF = 'Femenino'; // Aquí puedes establecer el valor del género a buscar
      this.obtenerGenero(generoM);
      this.obtenerGeneroF(generoF);
      this.obtenerCurso();
      this.filteredUsuarios = this.listUsuarios;

    }

    filtrarUsuariosPorArea() {
      // filtramos la lista de usuarios por el área seleccionada
      this.filteredUsuarios = this.listUsuarios.filter(usuario => usuario.nombreCargo === this.selectedCurso);
    }
  
    obtenerCurso() {
      this._cursoService.getCurso().subscribe(
        (data) => {
          console.log(data);
          this.listCurso = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }

  obtenerGenero(genero: string): void {
    console.log('Género a buscar:', genero);
    this._generoService.getGenero(genero).subscribe(data => {
      console.log('Usuarios encontrados:', data);
      this.listUsuarios = data;
    }, error => {
      console.log('Error al obtener usuarios:', error);
    }) 
  }

  obtenerGeneroF(genero: string): void {
    console.log('Género a buscar:', genero);
    this._generoService.getGeneroF(genero).subscribe(data => {
      console.log('Usuarios encontrados:', data);
      this.listUsuarios2 = data;
    }, error => {
      console.log('Error al obtener usuarios:', error);
    }) 
  }
}
