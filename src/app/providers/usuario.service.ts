import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  usuarios: Array<Usuario> = [
    { nome: "Ricardo", email: "ricardo@gmail.com"}
  ];

  constructor() { }

  public adicionarusuario(obj: Usuario){
    return this.setLocalStorage(obj);
  }

  public listarusuarios(): Observable<Usuario[]>{
    return this.getLocalStorage();
  }

  public setLocalStorage(obj: Usuario){
    this.usuarios = this.getLocalStorage();
    console.log(this.usuarios);
    this.usuarios.push(obj)
    return localStorage.setItem("usuarios", JSON.stringify(obj));
  }

  public getLocalStorage(){
    if(localStorage.getItem("usuarios")){
    return JSON.parse(localStorage.getItem("usuarios"));
    }else{    
      return this.usuarios;
    }
  }

}
