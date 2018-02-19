import { Usuario } from './../usuario';
import { UsuarioService } from './../providers/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public status: any;

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onSubmit(){
    this.service.adicionarusuario(this.usuario);
    console.log(localStorage.getItem("usuarios"));
    
  }

}
