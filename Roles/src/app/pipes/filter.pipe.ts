import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg=='' || arg.length<3) return value;
    const resultRol = [];
    for(const rol of value){
      if(rol.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultRol.push(rol);
      }
    }
    
    for(const rol of value){
      if(rol.nombreRol.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultRol.push(rol);
      }
    }
    return resultRol;
  }

}
