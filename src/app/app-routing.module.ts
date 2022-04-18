import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GuarrdService } from './service/guarrd.service';
import { TodoTempComponent } from './todo-temp/todo-temp.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path:"welcome",component: WelcomeComponent,canActivate:[GuarrdService]
  },
  {
    path:"login",component: LoginComponent
  },
  {
    path:"todo",component: TodoTempComponent,canActivate:[GuarrdService]
  },
  {
    path:"logout",component: LogoutComponent
  },
  {
    path:"**",component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
