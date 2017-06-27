import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms'

@Directive({
    selector: '[validateLocation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidateLocation ,multi:true}]
})


export class ValidateLocation implements Validator {
    validate(formgroup: FormGroup): { [key: string]: any } {
        let addressControl = formgroup.controls['address']
        let cityControl = formgroup.controls['city']
        let countryControl = formgroup.controls['country']
        let onlineUrlControl = (<FormGroup>formgroup.root).controls['onlineUrl']

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false }
        }
    }
    constructor() { }
}

/*
to add custom validation we need to add this in the list of NG_VALIDATORS of angular
 providers: [{ provide: NG_VALIDATORS, useExisting: ValidateLocation ,multi:true}]
 if i remove multi=true than my validateLocation override all the validation from the list so to avoid that we use
 multi=true
*/