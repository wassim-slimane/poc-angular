import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceComponent } from './device/device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'devices', component: DeviceListComponent, canActivate: [AuthGuard] },
  { path: 'devices/:id', component: DeviceDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit-device', component: EditDeviceComponent, canActivate: [AuthGuard] },
  { path: 'todo-list', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'users-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'add-user', component: NewUserComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: FourOhFourComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }