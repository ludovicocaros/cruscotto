import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cruscotto';

caro:boolean=0;

persona={
	nome:'ludovico',
	cognome:'carosi',
	anni:'23',
}
}