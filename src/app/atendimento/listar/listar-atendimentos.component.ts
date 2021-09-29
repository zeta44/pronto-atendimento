import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Atendimento} from '../shared';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrls: ['./listar-atendimentos.component.css']
})
export class ListarAtendimentosComponent implements OnInit {

  atendimentos: Atendimento[];  //vem do model

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.atendimentos = this.listarTodos();
  }

  listarTodos(): Atendimento[]{
    return this.atendimentoService.listarTodos();
  }

  alterarPrioridade(atendimento:Atendimento): void {
    if (confirm(`Deseja alterar a propridade do atendimento ${atendimento.nome} ?`)) {
      this.atendimentoService.alterarPrioridade(atendimento.id);
      this.atendimentos = this.listarTodos()
    }
    else{
      this.atendimentos = this.listarTodos()
    }
  }

  alterarAtendimento(atendimento:Atendimento): void {
    if (confirm(`Deseja mudar o Status do atendimento de ${atendimento.nome} ?
                Preto: Aguardando atendimento.
                Vermelho: Já atendido.`)) {
      this.atendimentoService.alterarAtendimento(atendimento.id);
      this.atendimentos = this.listarTodos()
    }
    else{
      this.atendimentos = this.listarTodos()
    }
  }

  remover($event:any, atendimento:Atendimento):void{
    $event.preventDefault();
    if (confirm(`Deseja remover o paciente ${atendimento.nome} ?`)) {
      this.atendimentoService.remover(atendimento.id);
      this.atendimentos = this.listarTodos()
    }
  }


}
