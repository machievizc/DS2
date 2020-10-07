import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const backend = environment.urlSaaS;

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor(private http: HttpClient) {}

  public listarTodos() {
    return this.http.get(backend + '/cidades');
  }

  public listarPorId(id: number) {
    return this.http.get(backend + '/cidades' + id);
  }

  public adicionar(cidade: object) {
    return this.http.post(backend + '/cidades/', cidade);
  }

  public alterar(id: number, cidade: object) {
    return this.http.put(backend + '/cidades/' + id, cidade);
  }

  public excluir(id: number) {
    return this.http.delete(backend + '/cidades/' + id);
  }
}

class CidadeEntity {
  id: number;
  nome: string;
  uf: string;
}
