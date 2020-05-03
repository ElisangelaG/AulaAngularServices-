import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pessoas } from '../pessoas/pessoas.model';

@Component({
  selector: 'app-pessoas-detalhes',
  templateUrl: './pessoas-detalhes.component.html',
  styleUrls: ['./pessoas-detalhes.component.css']
})


export class PessoasDetalhesComponent implements OnInit {

  @Input() detalhe;
  @Input() pessoa: pessoas;
  @Output() NovapessoaEvento = new EventEmitter();

  Novapessoa: pessoas;


  constructor() { }

  confirmarDados(nome, idade, corOlhos, sexo, email) {
    this.Novapessoa = { id: this.pessoa.id, name: nome, idade: idade, corOlhos: corOlhos, sexo: sexo, email: email }
    this.NovapessoaEvento.emit(this.Novapessoa);

  }
  atualizarDados() {
    document.getElementById("invisible").style.display = "block";
  }
  ngOnInit(): void {
  }

}
