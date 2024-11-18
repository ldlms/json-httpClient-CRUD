import { Component, inject} from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserListComponent } from "../user-list/user-list.component";
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { FacadeUserService } from '../../services/facade-user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, UserListComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  private formCreateUser = inject(FormBuilder);
  private facadeService:FacadeUserService =inject(FacadeUserService);
  route: Router = inject(Router);

  users$:Observable<User[]> = this.facadeService.getAll$();

  CreateForm = this.formCreateUser.group({
    username: ['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
  })

  onSubmit():void{
   if(this.CreateForm.valid){
    this.facadeService.post$(this.CreateForm.value as User)
    this.CreateForm.reset();
   }
  }

  deleteUser(user:User){
    this.facadeService.delete$(user);
  }

}
