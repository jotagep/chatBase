import { Routes } from '@angular/router';

import { ChatroomComponent } from './app/components/chatroom/chatroom.component';
import { LoginFormComponent } from './app/components/login-form/login-form.component';
import { SignupFormComponent } from './app/components/signup-form/signup-form.component';

import { AuthGuard } from './app/guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'chat', component: ChatroomComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
