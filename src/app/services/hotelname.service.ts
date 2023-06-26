import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelnameService {

  public hotelname: string = '';
  public hotelnameone: string = '';
  constructor() { }
  public getplacename(): any {
    return this.hotelname;
  }
  public setplacename(placename: any) {
    this.hotelname = placename;
  }
  public sethotelname(placenameone: any) {
    this.hotelnameone = placenameone;
  }

  public gethotelname() {
    return this.hotelnameone;
  }
}
