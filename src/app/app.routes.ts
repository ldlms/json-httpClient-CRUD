import { Routes } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { CreateUserComponent } from './component/create-user/create-user.component';

export const routes: Routes = [

    {path:'',component:CreateUserComponent},
    {path:':id',component:UpdateUserComponent}
];
