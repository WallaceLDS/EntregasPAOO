import {Livro} from './livro.model';
import { Subject } from "rxjs";

export class LivroSevice{
    private livros: Livro[]=[];
    private listaLivroAtualizada = new  Subject<Livro[]>(); 

    getLivros(): Livro[]{
        return[...this.livros];
    }

    adicionarLivro(id:number,titulo:string,autor:string,nmpag:number){
        const livro: Livro = {
            id: id,
            titulo:titulo,
            autor: autor,
            nmpag: nmpag
        };
        this.livros.push(livro);
        this.listaLivroAtualizada.next([...this.livros]);

    }
    getListaDeLivrosAtualizadaObservable(){
        return this.listaLivroAtualizada.asObservable();
    }
}




/*id,titulo,autor,nmpag*/ 