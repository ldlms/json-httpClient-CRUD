import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { User } from '../models/user';
import { UserApiService } from './user-api-service.service';
import { StoreUserService } from './store-user.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeUserService {

  constructor(){}

  private _userApiService:UserApiService = inject(UserApiService);
  private _storeService:StoreUserService = inject(StoreUserService);

  getAll$():Observable<User[]>{
    return this._userApiService.getUsers$().pipe(
      switchMap( users => this._storeService.setAll$(users))
    )
  }

  getUserById$(index:string):Observable<User>{
    return this._userApiService.getUserById$(index);
  }

  post$(user:User){
    return this._userApiService.createUser$(user).pipe(
      tap((user:User) => this._storeService.add$(user))
    ).subscribe()
  }

  update$(user:User){
    this._userApiService.updateUser$(user).pipe(
      tap((user:User) => this._storeService.update$(user))
    ).subscribe()
  }

  delete$(user:User){
    this._userApiService.DeleteUser$(user.id).pipe(
      tap((user:User) => this._storeService.delete$(user))
    ).subscribe()
  }

}
