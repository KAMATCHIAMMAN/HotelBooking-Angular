import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchbasedhotelnameService {

  public hotelname:string='';
  constructor() { }
  public gethotelname():any{
    return this.hotelname;
  }
  public sethotelname(placename:any){
    this.hotelname=placename;
}
}
