import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';




const routes: Routes = [
  {path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  /*{path:'',component:HomepageComponent}*/
  {path:'',redirectTo:'home/homepage',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
