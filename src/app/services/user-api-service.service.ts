import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiServiceService {

  private _http: HttpClient = inject(HttpClient);
  private _BASE_URL = "http://localhost:3000/users";

  users$:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])

  getUsers():void{
    this._http.get<User[]>(this._BASE_URL).pipe(
      map( response => {
        this.users$.next([ ...response])
      }
      )
    ).subscribe();
    console.log(this.users$);
  }

  getUserById(id:string):Observable<User>{
    return this._http.get<User>(`${this._BASE_URL}/${id}`)
  }

  createUser(user:User):Observable<User>{
    return this._http.post<User>(this._BASE_URL,user).pipe(
      tap(() => this.getUsers())
    );
  }

  DeleteUser(id:string){
    return this._http.delete<User>(`${this._BASE_URL}/${id}`).pipe(
      tap(()=> this.getUsers())
    );
  }

  updateUser(user:User):Observable<User>{
    return this._http.put<User>(`${this._BASE_URL}/${user.id}`,user).pipe(
      tap(() => this.getUsers())
    );
  }

  

  


}
