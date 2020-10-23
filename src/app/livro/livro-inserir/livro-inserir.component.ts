import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Livro } from "../livro.model";
@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})

export class LivroInserirComponent implements OnInit {
  id: number;
  titulo: string;
  autor: string;
  nmpag: number;

  @Output() livroAdicionado = new EventEmitter<Livro>();

  onAdicionarLivro(){
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      nmpag: this.nmpag
    };
    this.livroAdicionado.emit(livro);

  }

/* -- ----------- ------ */

  constructor() { }

  ngOnInit(): void {
  }

}
