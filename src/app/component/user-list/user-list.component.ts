import { Component, EventEmitter, inject, Input,OnChanges,OnDestroy,OnInit,Output, SimpleChanges} from '@angular/core';
import { User } from '../../models/user';
import { UserApiService} from '../../services/user-api-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Output() deleteEvent = new EventEmitter<User>();
  userService:UserApiService = inject(UserApiService);
  route: Router = inject(Router);
  @Input() users$:Observable<User[]> = new Observable<User[]>




  deleteUser(user:User){
    this.deleteEvent.emit(user);
  }

  triggerUpdate(id:string){
    this.route.navigate([`${id}`]);
  }

  
}
