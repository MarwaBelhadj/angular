import { PostsService } from './../../../../bootcampAngular/src/app/services/posts.service';
import { UsersService } from './../../../../bootcampAngular/src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nom : string="nom du composant";
  etudiants : string[]=[];
  myPosts : any[]=[];
//injection de dépendance service UsersService dans le constructeur
  constructor(private service: UsersService, private postService : PostsService) {
    //console.log("Constructeur");

   }

  ngOnInit(): void {
    //console.log("ngOnInit");
    //console.log(this.service.getStudent());
    this.etudiants=this.service.getStudent();
    /*this.servicePosts.getPosts().subscribe(
      data =>{
        console.log(data);
      }
    )*/
  }
//On a testé dans le console du browser le constructeur() qui s'éxécute avant le ngOnInit()
}
