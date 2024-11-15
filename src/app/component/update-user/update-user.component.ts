import { Component, inject, OnInit } from '@angular/core';
import { UserApiServiceService } from '../../services/user-api-service.service';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent  {

  userService: UserApiServiceService = inject(UserApiServiceService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private routing:Router = inject(Router);
  user!: User

 



}
