import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainscreamComponent } from './components/mainscream/mainscream.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: MainscreamComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
