export class Contacto {

    id: number = -1
    nombre: string
    apellido?: string
    edad?: number
    numero: number
    numeroTrabajo?: number

    constructor (nombre?: string, numero?:number, apellido?: string, edad?:number,  numeroTrabajo?: number) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.numero = numero,
        this.numeroTrabajo = numeroTrabajo 
    }
    
}
