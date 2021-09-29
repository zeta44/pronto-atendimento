import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento.model';

@Injectable()
export class AtendimentoService {

  constructor() { }

  listarTodos(): Atendimento[]{ //vem de model
    const atendimentos = localStorage['atendimentos'] //vai receber do localStorage['nomedobanco']
    return atendimentos ? JSON.parse(atendimentos): []; //dentro da const tarefas recebe todas as tarefas, mas no primeiro momento não terá nenhuma tarefa, então dentro do return vamos fazer a verificação. JSON.parse converterá de string para json (localStorage armazena como string)
  }

  listarAtivos(): Atendimento[]{

    let objs= new Array<Atendimento>();
    const atendimentos : Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs) =>{
      if( obj.atendida === false){
        objs[index] = obj;
      }
    });
    return objs; //dentro da const tarefas recebe todas as tarefas, mas no primeiro momento não terá nenhuma tarefa, então dentro do return vamos fazer a verificação. JSON.parse converterá de string para json (localStorage armazena como string)
  }
  

  cadastrar(atendimento: Atendimento):void{  
    const atendimentos = this.listarTodos();
    atendimento.id = new Date().getTime();
    atendimento.removida = false;
    atendimento.prioridade = false;
    atendimentos.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos)
  }

  buscarPorId(id: number):Atendimento{
    const atendimentos : Atendimento[] = this.listarTodos();
    return atendimentos.find(atendimento => atendimento.id === id );
  }

  atualizar(atendimento: Atendimento): void{
    const atendimentos : Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs) =>{
      if( atendimento.id === obj.id){
        objs[index] = atendimento;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos); 
  }

  remover(id: number):void{
    const atendimentos : Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].removida = true;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  alterarPrioridade(id: number):void{
    const atendimentos : Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].prioridade = !obj.prioridade;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  alterarAtendimento(id: number):void{
    const atendimentos : Atendimento[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].atendida = !obj.atendida;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  

}


