import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USER } from './dummy-users';
import { Tasks } from "./tasks/tasks";
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
 users = DUMMY_USER;
 selectedUserId='u1';

 get selectedUser(){
  console.log(this.users);
  
  return this.users.find((user) => {return user.id === this.selectedUserId});
 }

 onSelectUser(id: string){
  this.selectedUserId = id;
 }
}
