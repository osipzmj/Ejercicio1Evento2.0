export class Curso {
    _id?: number;
    nombreCurso: string;
    horas: string;
    tipoCurso: string;
    img: Uint8Array

    constructor(nombreCurso: string, horas: string, tiposCurso: string, img: Uint8Array) {
        this.nombreCurso = nombreCurso;
        this.horas = horas;
        this.tipoCurso = tiposCurso;
        this.img = img
    }
}