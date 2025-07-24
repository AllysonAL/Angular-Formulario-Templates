import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service : ConsultaCepService) { }

  ngOnInit(): void {
  }

  aplicarCep(cep : any, formulario : NgForm){
    const cepValor = cep.target.value;

    if (cepValor !== ''){
      this.service.obterCep(cepValor).subscribe((dados) => {
        this.populandoEndereco(formulario, dados);
      });
    }
  } 

  populandoEndereco(formulario : NgForm, dados : any){
    formulario.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

  cadastrar(form : NgForm){
    if (form.valid){
      this.router.navigate(['./sucesso']);
    }
    else{
      alert('Formulário incorreto');
    }   
  }
}
