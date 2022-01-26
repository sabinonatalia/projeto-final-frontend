import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cadastro } from '../model/Cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private http: HttpClient
  ) { }

  token = {hearders: new HttpHeaders().set('Authorization', environment.token)}

  // getAllCadastro(): Observable<Cadastro[]>{
  //   return this.http.get<Cadastro[]>('http://localhost:8080/easyjob-diversitech/profissionais', this.token)
  // }

  getAllCadastro(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>('http://localhost:8080/easyjob-diversitech/profissionais')
  }

  postCadastro(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>('http://localhost:8080/easyjob-diversitech/profissionais', cadastro)
  }
}
