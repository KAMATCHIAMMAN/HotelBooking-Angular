import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HotelnameService } from 'src/app/services/hotelname.service';
import { SearchbasedhotelnameService } from 'src/app/services/searchbasedhotelname.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {


  @Input() item: any;
  location: string;
  count: number | undefined;
  from: Date;
  to: Date;
  hotellist: any;


  myForm: FormGroup;

  filteredvalues: { routerlink: string; imagelink: string; hotelname: string; place: string; }[];
  newfilteredvalues: { routerlink: string; imagelink: string; hotelname: string; place: string; }[];


  constructor(private router: Router, public nameofthehotel: HotelnameService, public searchbasedhotelname: SearchbasedhotelnameService, private formBuilder: FormBuilder,private locationone: Location,private http:HttpClient) { }

  hotelname: any;
  currentDate = new Date();
  minDate = this.currentDate.toISOString().split('T')[0];
  descriptions:any;
  hooteldetails :any;
O
  ngOnInit(): void {

    // const hooteldetails = [{

    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e6/f1/06/hotel-gnanam.jpg?w=700&h=-1&s=1",
    //   hotelname: "Hotel Gnanam",
    //   place: "Thanjavur",
    //   date: "2023-06-12"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://lh3.googleusercontent.com/p/AF1QipND8OEJKyqWYPU338gYmf_5EGuw6_2zoNHDai19=w296-h202-n-k-rw-no-v1",
    //   hotelname: "Hotel Grand Ashok",
    //   place: "Thanjavur",
    //   date: "2023-06-09"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201205221143127701-e4002706e8b211ec86520a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;11,0&output-format=jpg",
    //   hotelname: "Daiwik Hotel",
    //   place: "Rameshwaram",
    //   date: "2023-06-10"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_15,w_627,h_353,r_0,c_crop,q_80,fl_progressive/w_1650,f_auto,c_fit/the-residency-towers-rameswaram/About_2_xlsclq",
    //   hotelname: "The Residency Towers",
    //   place: "Rameshwaram",
    //   date: "2023-06-11"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://www.theparkhotels.com/images/site-specific/chennai/gallery/theparkchennai.jpg",
    //   hotelname: "The Park",
    //   place: "Chennai",
    //   date: "2023-06-11"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/Coromandel-exterior---high-res-1900x1180-pixels-final.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
    //   hotelname: "Taj Coromandal",
    //   place: "Chennai",
    //   date: "2023-06-09"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS908KbHCQINxofyH2vwJFn8bXFsUlxxkrrwQ&usqp=CAU",
    //   hotelname: "KS Hotel",
    //   place: "Ooty",
    //   date: "2023-06-10"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/15/41/1541223_v3.jpeg",
    //   hotelname: "Sterling Ooty Fern Hill",
    //   place: "Ooty",
    //   date: "2023-06-10"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://www.ktdc.com/images/premium/samudra-lg.jpg",
    //   hotelname: "KTDC Hotel",
    //   place: "Kerala",
    //   date: "2023-06-10",
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://townbridgehotels.com/assets/images/about.jpg",
    //   hotelname: "Townbridge Hotels & Suites PVT Ltd Hotel",
    //   place: "Kerala",
    //   date: "2023-06-09"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/89446387.jpg?k=89c9e9b33371eac9341581cfe1b7cbd3e4d3447cad589a08ddd10f6667f00657&o=&hp=1",
    //   hotelname: "Hotel Ocean Heritage",
    //   place: "Kanniyakumari",
    //   date: "2023-06-09"
    // },
    // {
    //   routerlink: "/home/Hotels/thanjaihotelone",
    //   imagelink: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/64059676.jpg?k=12e4b73cee6862fc3b5a15d95cbc325d349ee6255f489ec7d4f261af4f3a6d10&o=&hp=1",
    //   hotelname: "Sparsa Resort",
    //   place: "Kanniyakumari",
    //   date: "2023-06-09"
    // }
    // ]
    
    this.getDescription();
  }
  getDescription()
    {
        this.http.get("https://localhost:7078/api/HotelsAdmin")
        .subscribe((resultData:any)=>
        {
            this.descriptions=resultData;
            console.log(this.descriptions);
            this.hooteldetails =this.descriptions;
            this.filteredvalues = this.hooteldetails;
           this.hotellist = this.hooteldetails;
        });
        
      }
  isfilled() {
    try {
      if (this.location.length == 0 || this.count == 0 || this.from == null || this.to == null) {
        this.router.navigate(['home/booknow'])
        alert("Plese fill all the details.")
      }
      else {
        let placename = this.location;
        let filter = this.hotellist.filter(item => item.place.toLocaleLowerCase().includes(placename.toLocaleLowerCase()) && item.fromdate == this.from &&item.todate==this.to)
        if (filter.length === 0) {
          alert("No match hotels found.");
          this.filteredvalues = filter;
        }
        else {
          this.filteredvalues = filter;
        }
      }
    }
    catch (error) {
      alert("Hello,Please fill all the details.");
    }
  }

  getname(hotelname) {
    if (hotelname === "Hotel Gnanam") {
      this.hotelname = "Hotel Gnanam";
    }
    else if (hotelname === "Hotel Grand Ashok") {
      this.hotelname = "Hotel Grand Ashok";
    }
    else if (hotelname === "Daiwik Hotel") {
      this.hotelname = "Daiwik Hotel";
    }
    else if (hotelname === "The Residency Towers") {
      this.hotelname = "The Residency Towers";
    }
    else if (hotelname === "The Park") {
      this.hotelname = "The Park";
    }
    else if (hotelname === "Taj Coromandal") {
      this.hotelname = "Taj Coromandal";
    }
    else if (hotelname === "KS Hotel") {
      this.hotelname = "KS Hotel";
    }
    else if (hotelname === "Sterling Ooty Fern Hill") {
      this.hotelname = "Sterling Ooty Fern Hill";
    }
    else if (hotelname === "KTDC Hotel") {
      this.hotelname = "KTDC Hotel";
    }
    else if (hotelname === "Townbridge Hotels & Suites PVT Ltd Hotel") {
      this.hotelname = "Townbridge Hotels & Suites PVT Ltd Hotel";
    }
    else if (hotelname === "Hotel Ocean Heritage") {
      this.hotelname = "Hotel Ocean Heritage";
    }
    else if (hotelname === "Sparsa Resort") {
      this.hotelname = "Sparsa Resort";
    }
    else {
      return;
    }

    this.nameofthehotel.setplacename(this.hotelname);

  }

  // @HostListener('window:popstate',['$event'])
  //   onpopstate(event:Event){
  //     this.locationone.forward();
  //   }
}