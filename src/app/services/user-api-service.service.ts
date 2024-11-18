import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private _http: HttpClient = inject(HttpClient);
  private readonly _BASE_URL:string = "http://localhost:3000/users";

  getUsers$():Observable<User[]>{
    return this._http.get<User[]>(this._BASE_URL);
  }

  getUserById$(id:string):Observable<User>{
    return this._http.get<User>(`${this._BASE_URL}/${id}`);
  }

  createUser$(user:User):Observable<User>{
    return this._http.post<User>(`${this._BASE_URL}/${user.id}`,user);
  }

  DeleteUser$(id:string):Observable<User>{
    return this._http.delete<User>(`${this._BASE_URL}/${id}`);
  }

  updateUser$(user:User):Observable<User>{
    return this._http.put<User>(`${this._BASE_URL}/${user.id}`,user);
  }

  

  


}
