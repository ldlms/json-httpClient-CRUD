import { Component, EventEmitter, inject, Input,OnChanges,OnInit,Output, SimpleChanges} from '@angular/core';
import { User } from '../../models/user';
import { UserApiServiceService } from '../../services/user-api-service.service';
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
export class UserListComponent  {
  
  @Output() deleteEvent = new EventEmitter<string>();
  userService:UserApiServiceService = inject(UserApiServiceService);
  route: Router = inject(Router);
  @Input() users$:Observable<User[]> = new Observable<User[]>




  deleteUser(id:string){
    this.deleteEvent.emit(id);
  }

  triggerUpdate(id:string){
    this.route.navigate([`${id}`]);
  }
}
