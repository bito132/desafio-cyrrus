import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColunaKanbanComponent } from './componentes/coluna-kanban/coluna-kanban.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColunaKanbanComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'teste-cyrrus';

  formulario_visivel: boolean = false;
  nome_tarefa: string = '';
  descricao_tarefa: string = '';
  prazo_tarefa: string = '';
  estado_tarefa: string= 'aberto';
  ordenacao_tarefas: string= 'prazos';
  pesquisa_titulo: string= '';
  visualizando_elemento: any;

  lista_terefas: any[] = [{}]

  toggle_formulario() {
    this.formulario_visivel = !this.formulario_visivel
  }

  editar_elemento(item:any){
    this.visualizando_elemento = item;
    this.nome_tarefa  = item.nome;
    this.descricao_tarefa= item.descricao;
    this.prazo_tarefa= item.prazo;
    this.estado_tarefa = item.estado;
    this.toggle_formulario()
    
  }

  fazer_tarefa(){
    if(this.visualizando_elemento){
      const tarefa = this.lista_terefas.find(x => x.nome == this.visualizando_elemento.nome && x.descricao == this.visualizando_elemento.descricao && x.prazo == this.visualizando_elemento.prazo && x.estado == this.visualizando_elemento.estado);
      tarefa.nome = this.nome_tarefa;
      tarefa.descricao = this.descricao_tarefa;
      tarefa.prazo = this.prazo_tarefa;
      tarefa.estado = this.estado_tarefa;

      this.visualizando_elemento = null;
    }
    else{
      this.lista_terefas.push({nome: this.nome_tarefa, descricao: this.descricao_tarefa, prazo: this.prazo_tarefa, estado: this.estado_tarefa})
      console.log(this.nome_tarefa, this.descricao_tarefa, this.prazo_tarefa, this.estado_tarefa)
    }

    this.formulario_visivel = !this.formulario_visivel
    this.nome_tarefa  = '';
    this.descricao_tarefa= '';
    this.prazo_tarefa= '';
    this.estado_tarefa = 'aberto';
  }

  tamanho_de_colunas(estado: string){
    return this.lista_terefas.filter(x => x.estado == estado).length;
  }
  
}