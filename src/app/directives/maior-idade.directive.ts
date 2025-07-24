import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdade]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator{
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const hoje = new Date();
    const dataCom18Anos = new Date(control.value);
    dataCom18Anos.setFullYear(dataCom18Anos.getFullYear() + 18);

    return (hoje >= dataCom18Anos) ? null : {'maiorIdade' : true};
  }  
}
