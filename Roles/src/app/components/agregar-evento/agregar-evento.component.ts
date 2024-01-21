import { AreaService } from 'src/app/services/area.service';
import { Area } from 'src/app/models/area';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import axios from 'axios';
import { filter, throwError } from 'rxjs';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent  implements OnInit {
  titulo = 'Registro';
  id: string | null;
  listUsuario: Usuario[] = [];
  listEvento: Evento[] = [];
  listArea: Area[] = [];
  usuarioForm: FormGroup;
  // static fol: number = +1;
  // folio = RegistroComponent.fol+1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _eventoService: EventoService,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute,
  ) {
    ;
    const now = new Date();
    this.usuarioForm = this.fb.group({  
      nombreEvento: [''],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.obtenerEvento();
  }

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
    const USUARIO: Usuario = {
      folio: this.usuarioForm.get('folio')?.value,
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
      }

  // agregarUsuarioEvento(): void {
  //   const nuevoFolio = this.fb.control('', Validators.required);
  //   this.folio.push(nuevoFolio);
  // }

  }
