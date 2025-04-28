import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coluna-kanban',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './coluna-kanban.component.html',
  styleUrl: './coluna-kanban.component.css'
})
export class ColunaKanbanComponent {

  @Input() lista_terefas: any[] = [{}];
  @Input() ordenacao_tarefas: string = 'prazos';
  @Input() pesquisa_titulo: string = '';
  @Output() elemento_visualizado: EventEmitter<any> = new EventEmitter<any>();
  tarefa_atual: any;

  toggle_formulario(item: any) {
    this.elemento_visualizado.emit(item);
  }

  filtro_de_tarefas(estado: string){

    var resultado: any[] = [{}];

    if(this.ordenacao_tarefas == 'nomes'){
      resultado = this.lista_terefas.filter(x => x.estado == estado).sort((a,b) => a.nome.localeCompare(b.nome));
    }
    else if(this.ordenacao_tarefas == 'prazos'){
      resultado = this.lista_terefas.filter(x => x.estado == estado && x.prazo != '').sort((a, b) => {return new Date(a.prazo).getTime() - new Date(b.prazo).getTime()}).concat(this.lista_terefas.filter(x => x.estado == estado && x.prazo == ''));
    }
    else{
      resultado = this.lista_terefas.filter(x => x.estado == estado);
    }

    if(this.pesquisa_titulo != ''){
      resultado = resultado.filter(x => x.nome.startsWith(this.pesquisa_titulo))
    }

    return resultado;
  }

  inicio_do_arrasto(tarefa: any){
    this.tarefa_atual = tarefa;
  }

  largar(event: any, status: string){

    event.preventDefault();

    const tarefa = this.lista_terefas.find(x => x.nome == this.tarefa_atual.nome && x.descricao == this.tarefa_atual.descricao && x.prazo == this.tarefa_atual.prazo && x.estado == this.tarefa_atual.estado);
    if(tarefa != undefined){
      tarefa.estado = status;
    }
    this.tarefa_atual = null;
  }

  arrastando(event: any){
    event.preventDefault();
  }

}
