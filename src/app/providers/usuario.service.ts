import { environment } from './../../environments/environment';
import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsuarioService {


  public url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'users', usuario, httpOptions);
  }

  public listarusuarios(): Observable<any> {
    return this.http.get(this.url);
  }

}
