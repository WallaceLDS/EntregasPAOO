import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { LivroListaComponent } from "./livro/livro-lista/livro-lista.component";
import { LivroInserirComponent } from "./livro/livro-inserir/livro-inserir.component";



const routes: Routes = [
{path: '', component: LivroListaComponent},
{path: 'criar', component: LivroInserirComponent}
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}