export class Usuario {
    _id?: number;
    folio:number;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    edad: number;
    genero: string;
    email: string;
    telefono: string;
    fechaCreacionUsuario: Date;
    nombreArea: string;
    nombreCiudad: string;
    nombreCargo: string;
    nombreEvento: string[];

    constructor(nombre: string, apPaterno: string, apMaterno: string, edad: number, genero:string,
         email: string, telefono: string, nombreArea: string, nombreCiudad: string, folio:number, 
         nombreCargo: string, fechaCreacionUsuario: Date, nombreEvento: string[]) {
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.edad = edad;
        this.genero = genero;
        this.email = email;
        this.telefono = telefono;
        this.nombreArea = nombreArea;
        this.nombreCiudad = nombreCiudad;
        this.nombreCargo = nombreCargo;
        this.folio = folio;
        this.fechaCreacionUsuario = fechaCreacionUsuario;
        this.nombreEvento = nombreEvento
    }
}