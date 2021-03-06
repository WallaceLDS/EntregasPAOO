import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http'

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
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

import{AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LivroInserirComponent,
    LivroListaComponent,
    CabecalhoComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,

    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
