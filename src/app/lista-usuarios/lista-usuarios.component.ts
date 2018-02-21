import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../providers/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: Array<Usuario>;
  public selectedUsuario: Usuario;

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.listarusuarios().subscribe(data => {
      this.usuarios = data.users;
    });
  }

  selectUsuario(usuario){
    this.selectedUsuario = usuario;
  }

  unselectUsuario(value){
    this.selectedUsuario = undefined;  }

}
