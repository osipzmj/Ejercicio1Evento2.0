import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  titulo = 'Crear curso';
  id: string | null;
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _cursoService: CursoService,
    private aRouter: ActivatedRoute
  ) {
    this.cursoForm = this.fb.group({
      nombreCurso: ['', Validators.required],
      tipoCurso: ['', Validators.required],
      img: ['', Validators.required], // En el caso de la imagen, necesitarás manejar la carga de archivos de forma especial
      descripcion: ['', Validators.required],
      horas: [0, Validators.required],
      idioma: ['', Validators.required],
      valoracion: [0, Validators.required],
      pais: ['', Validators.required],
      precio: [0, Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    // Puedes agregar lógica de inicialización aquí si es necesario
  }

  crearCurso() {
    if (this.cursoForm.invalid) {
      return;
    }

    const CURSO: Curso = {
      nombreCurso: this.cursoForm.get('nombreCurso')?.value,
      tipoCurso: this.cursoForm.get('tipoCurso')?.value,
      img: this.cursoForm.get('img')?.value,
      descripcion: this.cursoForm.get('descripcion')?.value,
      horas: this.cursoForm.get('horas')?.value,
      idioma: this.cursoForm.get('idioma')?.value,
      valoracion: this.cursoForm.get('valoracion')?.value,
      pais: this.cursoForm.get('pais')?.value,
      precio: this.cursoForm.get('precio')?.value,
    };

    if (this.id !== null) {
      this._cursoService.editarCurso(this.id, CURSO).subscribe(data => {
        this.toastr.success('El curso fue actualizado con éxito!', 'Bienvenido!');
        this.router.navigate(['/principal']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      });
    } else {
      this._cursoService.guardarCurso(CURSO).subscribe(data => {
        this.toastr.success('El curso fue registrado con éxito!', 'Bienvenido!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      });
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      
      // Puedes mostrar información sobre el archivo seleccionado si lo deseas
      console.log('Nombre del archivo:', file.name);
      console.log('Tamaño del archivo:', file.size);
      console.log('Tipo de archivo:', file.type);
      
      // Puedes agregar lógica adicional aquí, como cargar la imagen en una vista previa o
      // prepararla para su envío al servidor.
    }
  }
  
}


