import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooknowComponent} from '../home/booknow/booknow.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BooknowService} from '../services/booknow-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ThanjaiComponent } from './India/placedetails/thanjai.component';
import { ThanjaihoteloneComponent } from './Hotels/thanjaihotelone/thanjaihotelone.component';
import { FinalpaymentpageComponent } from './Hotels/finalpaymentpage/finalpaymentpage.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'booknow',component:BooknowComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'India/thanjai',component:ThanjaiComponent},
  {path:'Hotels/thanjaihotelone',component:ThanjaihoteloneComponent},
  {path:'Hotels/finalpaymentpage',component:FinalpaymentpageComponent,canActivate:[BooknowService]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
