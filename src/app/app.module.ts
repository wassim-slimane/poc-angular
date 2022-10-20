import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DeviceService } from './services/devices.service';
import { DeviceListComponent } from './device-list/device-list.component';
import { TodoService } from './services/todo.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    DeviceComponent,
    TodoListComponent,
    TodoTaskComponent,
    DeviceListComponent,
    AuthComponent,
    DeviceDetailsComponent,
    FourOhFourComponent,
    EditDeviceComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DeviceService,
    TodoService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
