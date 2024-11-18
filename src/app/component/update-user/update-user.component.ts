import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api-service.service';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { FacadeUserService } from '../../services/facade-user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit  {

  private _userService: UserApiService = inject(UserApiService);
  private _facadeService:FacadeUserService = inject(FacadeUserService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private routing:Router = inject(Router);

  user$!:Observable<User>
  user:User = {
    id:'',
    username:'',
    email:''
  }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      const index:string = params.get('id') as string;
      this._facadeService.getUserById$(index).pipe(
        map(
          response => {
            this.user = response
          }
        )
      )
    })
    
  }

  updateUser(user:User): void {
   this._facadeService.update$(user);
   this.routing.navigate(['']);
  }



}
