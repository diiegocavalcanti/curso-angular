import { Usuario } from './../usuario';
import { UsuarioService } from './../providers/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public status: any;
  public flag: boolean;

  constructor(private service: UsuarioService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.usuario = new Usuario();
    console.log(this.route);
    console.log(this.router);
  }

  public voltar() {
    this.router.navigate(['home']);
  }

  onSubmit(form, campo) {
    // this.service.adicionarUsuario(this.usuario).subscribe( data => {
    //   this.usuario = data;
    //   this.flag = true;
    // });

    console.log(form);
    console.log(campo);


  }

}
