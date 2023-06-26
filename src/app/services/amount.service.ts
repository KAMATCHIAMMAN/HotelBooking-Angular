import { Injectable } from '@angular/core';
import * as amountData  from "../../assets/amount.json";
import * as userdetails  from "../../assets/logindetails.json";

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  constructor() { }


  getuserdetails(){
  return userdetails;
 }
 
 public totalamount:any
 public hotelname:any;
 public totalnoofrooms:any;
 public getamount():any{
   return this.totalamount;
 }
 public setamount(amount:any){
   this.totalamount=amount;
   
   
 }
 public setotalrooms(totalrooms:any)
 {
  this.totalnoofrooms=totalrooms;
 }
 public gettotalrooms(){
  return this.totalnoofrooms; 
}
public sethotelname(hotelname:any){
  this.hotelname=hotelname;
}
public gethotelname()
{
  return this.hotelname;
}
}

