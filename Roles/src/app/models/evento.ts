export class Evento {
    _id?: number;
    nombreEvento: string;
    nombreArea: string;
    cupo: number;
    folio: number[];
    presentador: string;
    horario: string;
    duracion: string;

    constructor(nombreEvento: string, nombreArea: string, cupo: number, folio:number[],
        presentador: string, horario: string, duracion: string
        ) {
        this.nombreEvento = nombreEvento;
        this.nombreArea = nombreArea;
        this.cupo = cupo;
        this.folio = folio;
        this.presentador = presentador;
        this.duracion = duracion;
        this.horario = horario;
    }
}