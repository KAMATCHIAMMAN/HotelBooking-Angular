import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators, AbstractControl } from '@angular/forms';
import { AmountService } from 'src/app/services/amount.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finalpaymentpage',
  templateUrl: './finalpaymentpage.component.html',
  styleUrls: ['./finalpaymentpage.component.css']
})
export class FinalpaymentpageComponent implements OnInit {
  static CanActivate: any;
  grandtotal: any;
  paymentForm: FormGroup;
  userid: any;
  email: any;
  Date:any;
  cardname: any;
  cardnumber: any | undefined;
  month: any;
  year: any;
  cvv: any;
  resultArray: number[];
  totalsum: any;
  hotelname: any;
  totalrooms: any;
  constructor(public amountservice: AmountService, private router: Router, private http: HttpClient) { }

  Successmessage() {
    if (this.email.length == 0) {
      return
    }
    else {
      alert('Successfully Booked..')
    }
  }





  ngOnInit(): void {
    this.grandtotal = this.amountservice.getamount();
    this.hotelname = this.amountservice.gethotelname();
    this.totalrooms = this.amountservice.gettotalrooms();
    console.log(this.grandtotal);

    this.paymentForm = new FormGroup({
      userid: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      Date:new FormControl('',Validators.required),
      cardname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cardnumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}'), Validators.maxLength(16), Validators.minLength(16)])),
      month: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      cvv: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(3)]))

    })


  }

  get f() {
    return this.paymentForm.controls;
  }
  submit() { }
  success() {
    if ( this.email != 0  && this.cardname.length != 0 && this.cardnumber.length != 0 && this.month.length != 0 && this.year.length != 0 && this.cvv.length != 0 && this.totalsum % 10 == 0) {

      const bodyData = {
        "UserId":this.userid,
        "Email": this.email,
        "Date":this.Date,
        "Nameoncard": this.cardname,
        "Cardnumber": this.cardnumber,
        "Month": this.month,
        "Year": this.year,
        "CVV": this.cvv,

      }
      this.router.navigate(['home/homepage'])
      alert('Successfully Booked..')

      this.http.post("https://localhost:7078/api/user/CreditCardDetails", bodyData)
        .subscribe((resultData: any) => { });
    }
    else {
      alert('Please fill all the details correctly and may check your credit card details')
    }
  }
  isFormComplete(): boolean {
    const { cardname, cardnumber, month, year, cvv } = this.paymentForm.controls;
    return  cardname.valid && cardnumber.valid && month.valid && year.valid && cvv.valid;
  }

  sendnumber() {
    const digits: number[] = [];

    let tempNum = this.cardnumber;
    while (tempNum > 0) {
      digits.unshift(tempNum % 10);
      tempNum = Math.floor(tempNum / 10);
    }

    let sum = 0;

    this.resultArray = digits;
    for (let item = 0; item <= 15; item++) {
      if (item % 2 == 1) {
        sum = sum + this.resultArray[item];
        console.log(this.resultArray[item]);


      }
      else {
        this.resultArray[item] = 2 * this.resultArray[item];
        if (this.resultArray[item] >= 10) {
          this.resultArray[item] = this.resultArray[item] - 9;
        }
        sum = sum + this.resultArray[item];

      }

    }
    this.totalsum = sum;
    console.log(sum);
    if (sum % 10 != 0) {
      alert("enter vaild credit card number");
    }
    else {
      alert("card number is vaildated")
    }
  }
}
