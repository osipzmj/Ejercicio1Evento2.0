import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  listCurso: Curso[] = [];
  totalUsuarios: number | undefined;
  eventoForm: FormGroup;
  searchTerm='';
  id: string | null;

  modalAbierto: number = -1; // Variable para almacenar el índice del modal abierto

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
        modal.classList.add('show'); // Agrega la clase show para mostrar el modal con la animación
    }
}

cerrarModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show'); // Remueve la clase show para ocultar el modal con la animación
    }

}
applyFilter() {
  if (this.searchTerm.trim() === '') {
    this.obtenerCurso();
  } else {
    this.listCurso = new FilterPipe().transform(this.listCurso, this.searchTerm);
  }
}
}