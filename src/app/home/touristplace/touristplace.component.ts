import { Component, Input } from '@angular/core';
import { PlacenameService } from '../../services/placename.service';


@Component({
  selector: 'app-touristplace',
  templateUrl: './touristplace.component.html',
  styleUrls: ['./touristplace.component.css']
})
export class TouristplaceComponent {

  @Input() placedetails:any;
 
  constructor(public placename:PlacenameService ){}
  destination :any;
  ngOnInit(){}
  getname(placevalue){
    if(placevalue==='Thanjavur'){
      this.destination="Thanjavur";
    }
    else if (placevalue==="Rameshwaram"){
      this.destination="Rameshwaram";
    }
    else if(placevalue==="Chennai"){
      this.destination="Chennai";
    }
    else if(placevalue==="Ooty"){
      this.destination="Ooty";
    }
    else if(placevalue==="Kanniyakumari"){
      this.destination="Kanniyakumari";
    }
    else if(placevalue==="Kerala"){
      this.destination="Kerala";
    }
    else{
      return ;
    }
    this.placename.setplacename(this.destination);
  }


}
