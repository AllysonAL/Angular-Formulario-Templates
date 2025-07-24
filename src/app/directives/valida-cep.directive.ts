import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from "rxjs";
import { ConsultaCepService } from '../service/consulta-cep.service';

@Directive({
  selector: '[cep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidaCepDirective,
    multi: true
  }]
})
export class ValidaCepDirective implements AsyncValidator{

  constructor(private service : ConsultaCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;
    return this.service.obterCep(cep).pipe(map((dados : any) => dados.erro ? {'cep': true} : null));
  }
}
