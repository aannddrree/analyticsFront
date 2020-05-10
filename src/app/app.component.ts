import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route:ActivatedRoute,private router:Router) { }

  title = 'analyticsFront';

  onClickConsConta() {
    this.router.navigate(['/app-controle-conta']);
  }

  onClickConsBanco() {
    this.router.navigate(['/app-controle-banco']);
  }

  onClickPrincipal() {
    this.router.navigate(['/app-principal']);
  }

  onClickAjuda() {
    this.router.navigate(['/app-ajuda']);
  }

  onClickSair() {
    this.router.navigate(['/app-login']);
  }
}

