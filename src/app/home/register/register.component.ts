import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  submiited = false;
  
  

  constructor(private formBuilder: FormBuilder, private router: Router,private http:HttpClient) { }


  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

  }
  getControl(name: any): AbstractControl {
    return this.registrationForm.get(name)
  }

  onSubmit() { }
  

  valueone: string | undefined;
  valuetwo: string | undefined;
  valuethree: string | undefined;
  valuefour: string | undefined;
  
   
  checkvaule() {
    try {
      if (this.valueone.length == 0 && this.valuetwo.length == 0 && this.valuethree.length == 0 && this.valuefour.length == 0) {
        this.router.navigate(['home/register'])
        // throw new Error("Please fill all the details");
      }
      
      else {
        const bodyData={
          "Name":this.valueone,
          "Email":this.valuetwo,
          "Password":this.valuethree,
          "Phonenumber":this.valuefour
         }
        this.router.navigate(['home/login'])
        this.http.post("https://localhost:7078/api/UserRegirationAdmin",bodyData)
        .subscribe((resultData:any)=>
        {});
      }
    }
    catch (error) {
      alert("Hello,Please fill all the details");
    }
  }
}

