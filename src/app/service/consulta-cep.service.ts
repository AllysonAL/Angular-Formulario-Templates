import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConsultaCepService {

  private url_API = 'https://viacep.com.br/ws';

  constructor(private service : HttpClient) { }

  obterCep(cep : string){
    const url = `${this.url_API}/${cep}/json`;
    return this.service.get(url);
  }
}
