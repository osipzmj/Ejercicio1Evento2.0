import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {
  curso: Curso | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.obtenerCursoId();
  }

  obtenerCursoId(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    if (_id) {
      this.cursoService.getCursoId(_id).subscribe(curso => {
        this.curso = curso;
      });
      console.log(this.curso)
    } else {
      // Manejar caso de ID nulo (por ejemplo, redirigir a una página de error)
    }
  }
}
