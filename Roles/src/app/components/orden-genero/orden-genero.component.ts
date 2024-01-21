import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { GeneroService } from './../../services/genero.service';
import { MongoClient } from 'mongodb';
import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/models/area';

@Component({
  selector: 'app-orden-genero',
  templateUrl: './orden-genero.component.html',
  styleUrls: ['./orden-genero.component.css']
})
export class OrdenGeneroComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  listUsuarios2: Usuario[] = [];
  listArea: Area[] = [];
  totalUsuarios: number | undefined;
  eventoForm: any;
  selectedArea: string = '';
  filteredUsuarios: Usuario[] = [];
  

  constructor(private _generoService: GeneroService, 
   private  _areaService: AreaService,
    private toastr:ToastrService ) { }

    ngOnInit() {
      const generoM = 'Masculino'; // Aquí puedes establecer el valor del género a buscar
      const generoF = 'Femenino'; // Aquí puedes establecer el valor del género a buscar
      this.obtenerGenero(generoM);
      this.obtenerGeneroF(generoF);
      this.obtenerArea();
      this.filteredUsuarios = this.listUsuarios;

    }

    filtrarUsuariosPorArea() {
      // filtramos la lista de usuarios por el área seleccionada
      this.filteredUsuarios = this.listUsuarios.filter(usuario => usuario.nombreArea === this.selectedArea);
    }
  
    obtenerArea() {
      this._areaService.getArea().subscribe(
        (data) => {
          console.log(data);
          this.listArea = data;
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
