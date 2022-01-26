import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../model/Cadastro';
import { CadastroService } from '../service/cadastro.service';

@Component({
  selector: 'app-lista-cadastros',
  templateUrl: './lista-cadastros.component.html',
  styleUrls: ['./lista-cadastros.component.css']
})
export class ListaCadastrosComponent implements OnInit {

  cadastro: Cadastro = new Cadastro
  listaCadastro: Cadastro[]
  constructor(
    private router: Router,
    private cadastroService: CadastroService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  findAllCadastro(){
    this.cadastroService.getAllCadastro().subscribe((resp: Cadastro[])=>{
      this.listaCadastro = resp
    })
  }
}
