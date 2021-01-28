import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dniValido(): ValidatorFn {
    return (dni: AbstractControl): {[key: string]: any} | null => {
        var dniNum: string = dni.value;

        const numDni: number = parseInt(dniNum.substring(0, (dniNum.length - 1)));
        const letra = dniNum.charAt(dniNum.length -1);

        // Otra forma de conseguir el numero ->
        // const numDni: number = dni.value.match(/\d+/g);
        
        // Otra forma de conseguir la letra ->
        // const letra = dni.value.match(/[a-z]/gi);

        console.log(numDni + ' ' + letra);

        const resto = (numDni % 23);
        const letrasdni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        
        if (!letra) {
            return {dni: "Falta la letra"};
        }

        if (letrasdni[resto] != letra.toUpperCase()) {
            return {dni: "inválido"};
        } else {
            return null;
        }
    }
}