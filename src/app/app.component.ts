import { Component, Pipe } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//

export class AppComponent {
  //string interpolatrion
  title = 'AMS Project';
  formateur:string="Mohamed Amine Mezghich";
  bootcamp:string[]=["springboot","angular", "agile", "devops"];
  estHybride:boolean=true;
  prix:number=450;
}
