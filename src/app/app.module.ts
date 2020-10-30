import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LivroInserirComponent } from "./livro/livro-inserir/livro-inserir.component";

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { LivroListaComponent } from './livro/livro-lista/livro-lista.component';

import { LivroSevice } from "./livro/livro.service";
@NgModule({
  declarations: [
    AppComponent,
    LivroInserirComponent,
    LivroListaComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [LivroSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
