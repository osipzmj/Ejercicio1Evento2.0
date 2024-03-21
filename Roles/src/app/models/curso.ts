export class Curso {
    _id?: number;
    nombreCurso: string;
    horas: string;
    tipoCurso: string;
    img: Uint8Array;
    descripcion: String;
    idioma: String;
    valoracion: number;
    pais: String;
    precio: number

    constructor(nombreCurso: string, horas: string, tiposCurso: string, img: Uint8Array,
        descripcion: string, idioma: string, valoracion: number, pais: string, precio: number) {
        this.nombreCurso = nombreCurso;
        this.horas = horas;
        this.tipoCurso = tiposCurso;
        this.img = img;
        this.descripcion = descripcion;
        this.idioma = idioma;
        this.valoracion = valoracion;
        this.pais = pais;
        this.precio = precio;
    }
}