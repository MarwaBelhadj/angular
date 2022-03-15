import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  students:string[]=["Marwa","Amine","Mohamed","Nagui","Julien"];
  constructor() { }

  getStudent():string[]
  {
    return this.students;
  }

}
