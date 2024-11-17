import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserApiServiceService } from '../../services/user-api-service.service';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit  {

  userService: UserApiServiceService = inject(UserApiServiceService);
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
      this.user$ = this.userService.getUserById(index);
      this.user$.subscribe(
        response => {
          this.user = {...response}
        })
    })
    
  }

  updateUser(): void {
   this.userService.updateUser(this.user).subscribe();
   this.routing.navigate(['']);
  }



}
