import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //usei algumas declaraçoes para serem chada no compontent.html//
  titulos: string[];
  user1: string[];
  user2: string[];
  user3: string[];
  
 // aqui usei o THis como pararamntro pra ser chamado dentro da NGFor//
  constructor(){
    //estutura de dados  a ser usada pelo o component.html//
    this.titulos = ["Nome", "RU", "Curso", "Data de nascimento"],
    this.user1 = ["Flavio Mota Alves","3463447","Analise e Desenvolvimento de Sistemas", "01/08/1987"],
    this.user2 = ["Marcelo de Faria","3463448","Direito","03/06/1960"],
    this.user3 = ["Jose Vicente Neto","3463449","Medicina","23/11/1950"]
    
  }
}
