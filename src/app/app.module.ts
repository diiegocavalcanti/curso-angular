import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './providers/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ListaUsuariosComponent,
    NavbarComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
