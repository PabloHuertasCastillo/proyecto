import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dniValido(): ValidatorFn {
    return (dni: AbstractControl): {[key: string]: any} | null => {
        var dniNum: string = dni.value;
        
        const numDni: number = parseInt(dniNum.substring(0, (dniNum.length - 1)));
        const letra = dniNum.charAt(dniNum.length -1);

        const resto = (numDni % 23);
        const letrasdni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        
        if (letrasdni[resto] != letra) {
            return {dni: "inválido"};
        } else {
            return null;
        }
    }
}