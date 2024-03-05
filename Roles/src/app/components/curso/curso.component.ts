import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import axios from 'axios';
import { filter, throwError } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  listCurso: Curso[] = [];
  totalUsuarios: number | undefined;
  eventoForm: FormGroup;
  filter='';
  id: string | null;
  

  modalAbierto: number = -1; // Variable para almacenar el índice del modal abierto


  // filterRol='';
      constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private _cursoService: CursoService,
      private aRouter: ActivatedRoute,
    ) {
      this.eventoForm = this.fb.group({  
        cupo: ['', Validators.required],
        nombreCurso:  ['', Validators.required],// Agregar la propiedad fechaCreacionUsuario al formulario
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    // this.obtenerEvento();
    // this.esEditar();
    this.obtenerCurso();
  }

  obtenerCurso() {
    this._cursoService.getCurso().subscribe(data => {
      console.log(data);
      this.listCurso=data;
    }, error => {
      console.log(error);
    }) 
  }

  // esEditar() {

  //   if(this.id !== null) {
  //     this._eventoService.editarEvento(this.id, this.eventoForm.value).subscribe(data => {
  //       this.eventoForm.setValue({
  //         cupo: data.cupo         
  //       })
  //     })
  //   }
  // }

    abrirModal(modalId: string): void {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    }
  
    cerrarModal(modalId: string): void {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      }
    }
    
  }


