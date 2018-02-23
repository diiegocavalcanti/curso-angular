import { Usuario } from './../usuario';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from '../providers/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: Array<Usuario>;
  public selectedUsuario: Usuario;
  public flagSucesso: boolean;

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  public listarUsuarios(){
    this.service.listarusuarios().subscribe(data => {
      this.usuarios = data.users;
    });
  }

  excluirUsuario(id){
    this.service.removerUsuario(id).subscribe( data => {
      this.flagSucesso = true;
      this.listarUsuarios();
    }, error => {
      this.flagSucesso = false;
    });
  }

  selectUsuario(usuario){
    this.selectedUsuario = usuario;
  }

  unselectUsuario(value){
    this.selectedUsuario = undefined;  }

}
