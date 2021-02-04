export interface User {
    id?: number
    nombre: string
    apelldos?: string
    password?: string
    email?: string
    telefono?: number 
    dni?: string
}

export interface loginUser {
    email: string,
    password: string
}
