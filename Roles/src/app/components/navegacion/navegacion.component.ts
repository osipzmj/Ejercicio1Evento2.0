import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

  menuValue:boolean = false;
  menu_icon: string = 'bi bi-list';

  terminoBusqueda: string = '';
  resultados: Curso[] | undefined;

  
  constructor(
    private  _cursoService: CursoService,
  ){ }

  abrirMenu(){
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  cerrarMenu(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list'; 
  }

  // buscar(): void {
  //   this._cursoService.buscarCurso(this.terminoBusqueda)
  //     .subscribe((resultados: Curso[] | undefined) => this.resultados = resultados);
  // }
}
