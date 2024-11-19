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
  imports: [ FormsModule,AsyncPipe],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit  {

  private _facadeService:FacadeUserService = inject(FacadeUserService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private routing:Router = inject(Router);

  user$!:Observable<User>
  user:Observable<User|null> = this._facadeService.getSelectedUser$()
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      const index = params.get('id');
      if(index){
        this._facadeService.getUserById$(index);
      }
    })
    
  }

  updateUser(user:User): void {
   this._facadeService.update$(user);
   this.routing.navigate(['']);
  }



}
