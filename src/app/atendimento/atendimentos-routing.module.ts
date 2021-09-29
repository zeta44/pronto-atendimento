import { Routes } from '@angular/router';
import { EditarAtendimentoComponent } from './editar';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { ListarAtendimentosComponent } from './listar';


export const AtendimentoRoutes: Routes = [
    { 
        path:'atendimento',
        redirectTo: 'atendimento/listar'
    }, 
    { 
        path:'atendimento/listar',
        component: ListarAtendimentosComponent
    },
    {
        path:'atendimento/cadastrar',
        component: CadastrarAtendimentoComponent
    },
    {
        path: 'atendimento/editar/:id',
        component: EditarAtendimentoComponent
    }
];