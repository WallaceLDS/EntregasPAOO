import {Livro} from './livro.model';
import { Subject } from "rxjs";
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable ({providedIn: 'root'})
export class LivroSevice{
    private livros: Livro[]=[];
    private listaLivroAtualizada = new  Subject<Livro[]>(); 
    constructor(private httpClient: HttpClient){
        
    }

    getLivros(): void {
        this.httpClient.get <{mensagem: string, livros:
       Livro[]}>('http://localhost:3000/api/clientes').subscribe(
        (dados) => {
        this.livros = dados.livros;
        this.listaLivroAtualizada.next([...this.livros]);
        }
        )
        
        //return[...this.livros];
    }

    adicionarLivro(id:number,titulo:string,autor:string,nmpag:number){
        const livro: Livro = {
            id: id,
            titulo:titulo,
            autor: autor,
            nmpag: nmpag
        };
        this.httpClient.post<{mensagem: string}>('http://localhost:3000/api/clientes',livro).subscribe((resposta)=>{
         console.log(resposta.mensagem);
         this.livros.push(livro);
         this.listaLivroAtualizada.next([...this.livros]);   
        });
        //this.livros.push(livro);
        //this.listaLivroAtualizada.next([...this.livros]);

    }
    getListaDeLivrosAtualizadaObservable(){
        return this.listaLivroAtualizada.asObservable();
    }
}




/*id,titulo,autor,nmpag*/ 