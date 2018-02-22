import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public is_active = 'lista';

  constructor() { }

  ngOnInit() {
    
  }

  public setActive(route){
    this.is_active = route;
  }

}
