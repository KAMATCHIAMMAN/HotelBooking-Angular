import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacenameService {

  public placename:string='';
  constructor() { }
  public getplacename():any{
    return this.placename;
  }
  public setplacename(placename:any){
    this.placename=placename;
  }
}
