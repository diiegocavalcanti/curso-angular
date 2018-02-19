import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../providers/usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: Array<Usuario>;

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.listarusuarios().subscribe(data => {
      this.usuarios = data.users;
    });
  }

}
