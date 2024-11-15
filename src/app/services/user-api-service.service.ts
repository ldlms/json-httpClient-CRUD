import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiServiceService {

  private _http: HttpClient = inject(HttpClient);
  private _BASE_URL = "http://localhost:3000/users";

  users$:Observable<User[]> = this.getUsers()

  getUsers():Observable<User[]>{
    return this._http.get<User[]>(this._BASE_URL).pipe(
      map( response => {
        return response
    })
    )
  }

  createUser(user:User):Observable<User>{
    return this._http.post<User>(this._BASE_URL,user).pipe(
      map( reponse => {
        return reponse
      }
      )
    )
  }

  DeleteUser(id:string){
    return this._http.delete<User>(`${this._BASE_URL}/${id}`).pipe(
      map( reponse => {
        reponse
      }

      )
    )
  }

  

  


}
