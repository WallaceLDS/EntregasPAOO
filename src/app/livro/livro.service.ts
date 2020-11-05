import {Livro} from './livro.model';
import { Subject } from "rxjs";
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable ({providedIn: 'root'})
export class LivroSevice{
    private livros: Livro[]=[];
    private listaLivroAtualizada = new  Subject<Livro[]>(); 
    constructor(private httpClient: HttpClient){
        
    }

    getLivros(): void {
        this.httpClient.get 
        <{mensagem: string, livros:any}>
        ('http://localhost:3000/api/livros')
        .pipe(map((dados=>{
            return dados.livros.map((livro)=>{
                return {
                    idm:livro._id,
                    id:livro.id,
                    titulo: livro.titulo,
                    autor: livro.autor,
                    nmpag: livro.nmpag
                }
            })
        })))
        .subscribe(
            (livros) => {
                this.livros = livros;
                this.listaLivroAtualizada.next([...this.livros]);
            }
        )
        
        //return[...this.livros];
    }

    adicionarLivro(id:number,titulo:string,autor:string,nmpag:number){
        const livro: Livro = {
            idm: null,
            id: id,
            titulo:titulo,
            autor: autor,
            nmpag: nmpag,
        };
        this.httpClient.post<{mensagem: string, idm:string}>('http://localhost:3000/api/livros',livro)
        .subscribe((resposta)=>{
         console.log(resposta.mensagem);
         livro.idm= resposta.idm;
         console.log(resposta.idm);
         this.livros.push(livro);
         this.listaLivroAtualizada.next([...this.livros]);   
        });
        //this.livros.push(livro);
        //this.listaLivroAtualizada.next([...this.livros]);

    }

    removerCliente(idm: string): void{
        //console.log(idm)
        this.httpClient.delete(`http://localhost:3000/api/livros/${idm}`)
        .subscribe(()=>{
            this.livros= this.livros.filter((liv)=>{
                //console.log(idm);
                //console.log('liv '+liv.idm)
                return liv.idm !== idm;
            })
            this.listaLivroAtualizada.next([...this.livros]);
        
       //console.log (`Cliente de id: ${idm} removido`);
       })
    }
    getListaDeLivrosAtualizadaObservable(){
        return this.listaLivroAtualizada.asObservable();
    }
}




/*id,titulo,autor,nmpag*/ 