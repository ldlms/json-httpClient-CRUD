import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserApiServiceService } from '../../services/user-api-service.service';
import { User } from '../../models/user';
import { UserListComponent } from "../user-list/user-list.component";
import { Observable, Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, UserListComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {


  ngOnInit(): void {
    this.userService.getUsers();
  }

  private formCreateUser = inject(FormBuilder);
  private userService:UserApiServiceService = inject(UserApiServiceService);
  route: Router = inject(Router);

  constructor(){
    this.users$ = this.userService.users$
  }

  users$:Observable<User[]>

  
  CreateForm = this.formCreateUser.group({
    id: ['',[Validators.required]],
    username: ['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
})

  onSubmit():void{
   if(this.CreateForm.valid){
    this.userService.createUser(this.CreateForm.value as User).subscribe();
   }
  }

  deleteUser(id:string){
    this.userService.DeleteUser(id).subscribe()
  }

}
