import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cadastro } from '../model/Cadastro';
import { CadastroService } from '../service/cadastro.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  cadastro: Cadastro = new Cadastro
  listaCadastro: Cadastro[]
  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sessão expirada, faça login novamente')
      this.router.navigate(['/login'])
    }

    this.findAllCadastro()
  }

  cadastrar(){
    this.cadastroService.postCadastro(this.cadastro).subscribe((resp: Cadastro)=>{
      this.cadastro = resp
      alert('Cadastro feito com sucesso')
      this.findAllCadastro()
      this.cadastro =  new Cadastro()
    })
  }

  findAllCadastro(){
    this.cadastroService.getAllCadastro().subscribe((resp: Cadastro[])=>{
      this.listaCadastro = resp
    })
  }
}
