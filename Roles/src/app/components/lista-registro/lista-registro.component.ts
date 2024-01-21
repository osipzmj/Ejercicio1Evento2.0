import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { MongoClient } from 'mongodb';

@Component({
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.css']
})
export class ListaRegistroComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  totalUsuarios: number | undefined;

  // filterRol='';
  constructor(private _usuarioService: UsuarioService, 
    private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios=data;
    }, error => {
      console.log(error);
    }) 
  }

  // contarUsuarios(){
  //   this._usuarioService.contarUsuarios(cuentaUsuario: String).subscribe(data => {
  //     console.log(data);
  //     this.listUsuarios=data;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
