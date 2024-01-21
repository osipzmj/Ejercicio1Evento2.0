import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { CiudadService } from 'src/app/services/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/cargo';
import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/models/area';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';
import axios from 'axios';
import { filter, map, throwError } from 'rxjs';
// import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  titulo = 'Registro';
  id: string | null;
  listUsuario: Usuario[] = [];
  listEvento: Evento[] = [];
  listCargo: Cargo[] = [];
  listCiudad: Ciudad[] = [];
  listArea: Area[] = [];
  usuarioForm: FormGroup;
  static fol: number = 1;
  nuevoFolio = RegistroComponent.fol+1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _usuarioService: UsuarioService,
    private _ciudadService: CiudadService,
    private _cargoService: CargoService,
    private _areaService: AreaService,
    private _eventoService: EventoService,
    private aRouter: ActivatedRoute,
  ) {
    ;
    const now = new Date();
    this.usuarioForm = this.fb.group({  
      folio: [this.nuevoFolio],
      nombre: ['', Validators.required],
      apPaterno: ['', Validators.required],
      apMaterno: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      nombreArea: ['', Validators.required],
      nombreCiudad: ['', Validators.required],
      nombreCargo: ['', Validators.required],
      nombreEvento:  ['', Validators.required],
      fechaCreacionUsuario: [now] // Agregar la propiedad fechaCreacionUsuario al formulario
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.obtenerUsuario();
    this.obtenerCiudad();
    this.obtenerCargo();
    this.obtenerArea();
    this.obtenerEvento();
    this.esEditarRegistro();

    this.obtenerUltimoFolio().subscribe((ultimoFolio) => {
      this.nuevoFolio = ultimoFolio;
    });
  }


  obtenerUsuario() {
    this._usuarioService.getUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.listUsuario = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerCargo() {
    this._cargoService.getCargo().subscribe(
      (data) => {
        console.log(data);
        this.listCargo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerCiudad() {
    this._ciudadService.getCiudad().subscribe(
      (data) => {
        console.log(data);
        this.listCiudad = data;
      },
      (error) => {
        console.log(error);
      }
    );
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

  // get Evento(): FormArray {
  //   return this.usuarioForm.get('evento') as FormArray;
  // }

  obtenerEvento() {
    this._eventoService.getEvento().subscribe(
      (data) => {
        console.log(data);
        this.listEvento = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  agregarUsuario() {
    this._usuarioService.getUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.listUsuario = data;
        const maxFolio = Math.max(...this.listUsuario.map(usuario => usuario.folio));
        const nuevoFolio = maxFolio + 1;
        this.usuarioForm.patchValue({
          folio: nuevoFolio
        });
        const USUARIO: Usuario = {
          folio: nuevoFolio,
          nombre: this.usuarioForm.get('nombre')?.value,
          apPaterno: this.usuarioForm.get('apPaterno')?.value,
          apMaterno: this.usuarioForm.get('apMaterno')?.value,
          edad: this.usuarioForm.get('edad')?.value,
          genero: this.usuarioForm.get('genero')?.value,
          email: this.usuarioForm.get('email')?.value,
          telefono: this.usuarioForm.get('telefono')?.value,
          nombreArea: this.usuarioForm.get('nombreArea')?.value,
          nombreCiudad: this.usuarioForm.get('nombreCiudad')?.value,
          nombreCargo: this.usuarioForm.get('nombreCargo')?.value,
          nombreEvento: this.usuarioForm.get('nombreEvento')?.value,
          fechaCreacionUsuario: this.usuarioForm.get('fechaCreacionUsuario')?.value
        };
            
        if (this.id !== null) {
          //editar rol
          this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data => {
            this.toastr.success('El usuario fue actualizado con exito!', 'Bienvenido!');
            this.router.navigate(['/lista-registro']);
          }, error => {
            console.log(error);
            this.usuarioForm.reset();
          });
        } else {
          //agregar rol
          console.log(USUARIO);
          this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
            this.toastr.success('El usuario fue registrado con exito!', 'Bienvenido!');
            this.router.navigate(['/']);
          }, error => {
            console.log(error);
            this.usuarioForm.reset();
          })
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
      obtenerUltimoFolio() {
        return this._usuarioService.getUsuarios().pipe(
          map((usuarios: Usuario[]) => {
            if (usuarios.length === 0) {
              return 1; // si no hay usuarios, retornar 1 como primer folio
            } else {
              return usuarios[usuarios.length - 1].folio + 1; // si hay usuarios, retornar el folio del último usuario registrado + 1
            }
          })
        );
      }

      esEditarRegistro(){
        if(this.id!==null){
          this.titulo = 'Editar registro';
          this._usuarioService.obtenerUsuario(this.id).subscribe(data =>{
            this.usuarioForm.setValue({
              folio: data.folio              
            })
          })
        }
      }

    
  // eliminarCupo(index: number): void {
  //   this.cupo.removeAt(index);
  // }

}

