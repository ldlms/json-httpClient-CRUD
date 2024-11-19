import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  private _users$ = new BehaviorSubject<User[]>([])
  private _selectedUser$ = new BehaviorSubject<User>({id:'',username:'',email:''})

  setAll$(users:User[]):Observable<User[]>{
    this._users$.next(users);
    return this._users$.asObservable();
  }

  setSelectedUser$(user:User):Observable<User>{
    this._selectedUser$.next(user)
    return this._selectedUser$.asObservable()
  }

  getSelectedUser(){
    return this._selectedUser$
  }

  add$(user:User):void{
    this._users$.next([...this._users$.value,user]);
  }

  update$(user:User):void{
    const updatedUser = this._users$.value.map(x => x.id == user.id ? user : x );
    this._users$.next(updatedUser);
    this._selectedUser$.next({id:'',username:'',email:''})
  }

  delete$(user:User){
    const deletedUser = this._users$.value.filter(x => x.id !== user.id);
    this._users$.next(deletedUser);
  }
}
