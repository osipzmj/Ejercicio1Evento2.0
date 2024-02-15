import { Evento } from 'src/app/models/evento';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { EventoService } from './../../services/evento.service';
import { MongoClient } from 'mongodb';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { filter, map, throwError } from 'rxjs';

@Component({
  selector: 'app-area-interes',
  templateUrl: './area-interes.component.html',
  styleUrls: ['./area-interes.component.css']
})
export class AreaInteresComponent implements OnInit {
  listEvento: Evento[] = [];
  totalUsuarios: number | undefined;
  eventoForm: FormGroup;
  id: string | null;

  // filterRol='';
      constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private _eventoService: EventoService,
      private aRouter: ActivatedRoute,
    ) {
      this.eventoForm = this.fb.group({  
        cupo: ['', Validators.required],
        nombreEvento:  ['', Validators.required],// Agregar la propiedad fechaCreacionUsuario al formulario
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.obtenerEvento();
    this.esEditar();
  }

  obtenerEvento() {
    this._eventoService.getEvento().subscribe(data => {
      console.log(data);
      this.listEvento=data;
    }, error => {
      console.log(error);
    }) 
  }

  esEditar() {

    if(this.id !== null) {
      this._eventoService.editarEvento(this.id, this.eventoForm.value).subscribe(data => {
        this.eventoForm.setValue({
          cupo: data.cupo         
        })
      })
    }
  }

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


