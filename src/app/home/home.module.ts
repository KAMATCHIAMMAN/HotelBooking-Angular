import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BooknowComponent } from './booknow/booknow.component';
import {BooknowService} from '../services/booknow-guard.service';
import{AuthService} from '../services/auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ThanjaiComponent } from './India/placedetails/thanjai.component';
import { FormsModule } from '@angular/forms';
import { ThanjaihoteloneComponent } from './Hotels/thanjaihotelone/thanjaihotelone.component';
import { FinalpaymentpageComponent } from './Hotels/finalpaymentpage/finalpaymentpage.component';
import { TouristplaceComponent } from './touristplace/touristplace.component';
import { HotelnameService } from '../services/hotelname.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BooknowComponent,
    HomepageComponent,
    ThanjaiComponent,
    ThanjaihoteloneComponent,
    ThanjaihoteloneComponent,
    FinalpaymentpageComponent,
    TouristplaceComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers:[BooknowService,AuthService,HotelnameService]
})
export class HomeModule { }
