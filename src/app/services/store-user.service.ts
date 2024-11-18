import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }

  private _users$ = new BehaviorSubject<User[]>([])

  setAll$(users:User[]):Observable<User[]>{
    this._users$.next(users);
    return this._users$.asObservable();
  }

  add$(user:User):void{
    this._users$.next([...this._users$.value,user]);
  }

  update$(user:User):void{
    const updatedUser = this._users$.value.map(x => x.id == user.id ? user : x );
    this._users$.next(updatedUser);
  }

  delete$(user:User){
    const deletedUser = this._users$.value.filter(x => x.id !== user.id);
    this._users$.next(deletedUser);
  }
}
