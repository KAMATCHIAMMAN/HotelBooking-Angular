import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;
  submiited = false;
  dialog: any;
   

  constructor(private router: Router, private authService: AuthService,private location: Location) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });

  }

  getControl(name: any): AbstractControl {
    return this.reactiveForm.get(name)
  }

  onSubmit() { }



  valuetwo: string | undefined;
  valuethree: string | undefined;
  message: string | undefined;
  session: string;


  checkvaule() {

    try {
      if (this.valuetwo.length == 0 || this.valuethree.length == 0) {
        this.router.navigate(['home/login'])
      }
      else {
        //this.router.navigate(['home/booknow'])
        
        let data = { email: this.valuetwo, password: this.valuethree };
        let value = [this.valuetwo, this.valuethree];
        const token = this.authService.authUser(data);
        if (token) {
          localStorage.setItem('token', token.email)
          // this.router.config.forEach((route, index) => {
          //   if (route.path === 'login') {
          //     this.router.config.splice(index, 1);
          //   }
          // });
          this.location.replaceState('this.location.back()');
          alert("login successful");
          //window.location.href = this.location.back()
          this.location.back();
          
       
        }
        else {
          this.router.navigate(['home/login'])
          alert("Please enter valid Email id and password");
        }
      }
    }
    catch (error) {
      alert("Hello,Please fill all the details.");
    }
  }
  // @HostListener('window:popstate',['$event'])
  // onpopstate(event:Event){
  //   this.location.forward();
  // }

}



