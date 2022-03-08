import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './Auth/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisComponent } from './Auth/regis/regis.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'register',component:RegisComponent}
,{path:'home',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
