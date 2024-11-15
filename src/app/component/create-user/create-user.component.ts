import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserApiServiceService } from '../../services/user-api-service.service';
import { User } from '../../models/user';
import { UserListComponent } from "../user-list/user-list.component";
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, UserListComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  private formCreateUser = inject(FormBuilder);
  private userService:UserApiServiceService = inject(UserApiServiceService);
  users$:Observable<User[]> = this.userService.getUsers();
  route: Router = inject(Router);
  
  CreateForm = this.formCreateUser.group({
    id: ['',[Validators.required]],
    username: ['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
})

  onSubmit():void{
   if(this.CreateForm.valid){
    this.userService.createUser(this.CreateForm.value as User).subscribe();
    this.loadUsers();
   }
  }

  deleteUser(id:string){
    this.userService.DeleteUser(id).subscribe()
    this.loadUsers();
  }

  loadUsers(){
    this.users$ = this.userService.getUsers()
  }

 

}
