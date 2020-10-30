import { Component, OnInit,  } from '@angular/core';
import { Livro } from "../livro.model";
import {LivroSevice} from '../livro.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})

export class LivroInserirComponent implements OnInit {
  constructor(public livroService: LivroSevice) { }

  onAdicionarLivro(form: NgForm){
    if (form.invalid){
      return;
    }

    this.livroService.adicionarLivro(
       form.value.id,
       form.value.titulo,
       form.value.autor,
      form.value.nmpag
    );
    form.resetForm();
  }

/* -- ----------- ------ */

  

  ngOnInit(): void {
  }

}
