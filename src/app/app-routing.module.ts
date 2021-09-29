import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoRoutes } from './atendimento/atendimentos-routing.module';

export const router : Routes = [
    {
        path: '',
        redirectTo: 'atendimento/listar',
        pathMatch:'full'  //redireciona direto pra pasta raiz
    }, 
    ...AtendimentoRoutes  //faz um merge das rotas de tarefas-routing.module aqui
]; //dentro dos colchotes irão nossas rotas. faz concatenação de um array de rotas

@NgModule({
    imports : [ RouterModule.forRoot(router)],
    exports : [ 
        RouterModule
    ]
})

export class AppRoutingModule {} //informa sua existencia em app.module.ts