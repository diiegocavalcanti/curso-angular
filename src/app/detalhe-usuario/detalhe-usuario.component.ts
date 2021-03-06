import { Usuario } from './../usuario';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() fecharDetalhe = new EventEmitter();
  public cor: string;

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.fecharDetalhe.emit('close');
  }

  novaCor(event){
    this.cor = event.cor;
  }

}
