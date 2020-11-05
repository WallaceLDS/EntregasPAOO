import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../livro.model';
import {LivroSevice} from '../livro.service';

import { Subscription,observable } from "rxjs";

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

   livros: Livro[]= [];
   private clientesSubscription: Subscription;
  constructor(public livroService: LivroSevice) { }

  ngOnInit(): void {
    this.livroService.getLivros();
    this.clientesSubscription=this.livroService
    .getListaDeLivrosAtualizadaObservable()
    .subscribe((livros: Livro[])=>{
      this.livros=livros;
    });
  }

  onDelete(idm: string){
    //console.log(idm);
    this.livroService.removerCliente(idm);
  }
  ngOnDestroy():void{
    this.clientesSubscription.unsubscribe();
  }

}
