export interface User {
    id?: number
    nombre: string
    apellidos?: string
    password?: string
    email?: string
    telefono?: number 
    dni?: string
    imgSrc?: string
}

export interface loginUser {
    email: string,
    password: string
}
