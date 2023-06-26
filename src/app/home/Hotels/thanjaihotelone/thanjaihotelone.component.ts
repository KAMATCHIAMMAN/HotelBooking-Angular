import { HostListener } from '@angular/core';
import { Component ,Input} from '@angular/core';
import { AmountService } from 'src/app/services/amount.service';
import { HotelnameService } from 'src/app/services/hotelname.service';
import { SearchbasedhotelnameService } from 'src/app/services/searchbasedhotelname.service';
import { Location } from '@angular/common';
import{HttpClient} from '@angular/common/http';

interface Hotel {
  name: string;
  rooms: Room[];
}

interface Room {
  type: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-thanjaihotelone',
  templateUrl: './thanjaihotelone.component.html',
  styleUrls: ['./thanjaihotelone.component.css']
})
export class ThanjaihoteloneComponent {
  @Input() value: any;

  constructor(public amountservice:AmountService,public hotelname:HotelnameService, public searchbasedhotelname:SearchbasedhotelnameService,public location:Location,private http:HttpClient ){}
  data:any;
  filteredvalues:any;

  amountone:any;
  amounttwo:any;
  amountthree:any;
  amountfour:any;


  roomone:any;
  roomtwo:any;
  roomthree:any;
  roomfour:any;

  daysone:any;
  daystwo:any;
  daysthree:any;
  daysfour:any;

  
  typeoneamount:number=0;
  typetwoamount:number=0;
  typethreeamount:number=0;
  typefouramount:any=0;
  totalamount:number=0;
  descriptions:any;

  typeonenoofpersons:any;
  typetwonoofpersons:any;
  typethreenoofpersons:any;
  typefournoofpersons:any;

  totalrooms:number=0;
  userid:number=1;
  email:string="kamatchi@gmail.com";
  
  
  ngOnInit():void{
   //console.log(this.hotelname.getplacename());
   this.getDescription();
   //console.log(this.searchbasedhotelname.gethotelname())

  //  const particularhoteldetails=[
  //   {
  //     hotelname:"Hotel Gnanam",
  //     place:"Thanjavur",
  //     address:"Q4PV+HH2, Anna Salai Rd, Near Old Bus Stand, Keelavasal, S.N.M Rahman Nagar, Maharnonbu Chavadi,Thanjavur, Tamil Nadu 613001",
  //     aboutus:"As our guest, we are extremely delighted to extend a warm welcome to all our guests who are our “Athithi”. Hotel Gnanam is a household name in Thanjavur for its delivery of promise, poise and customer delight.Our hotel is located in central part of Thanjavur which will add much to your comfort, convenience and connect. All our guests will surely experience a warmth and professional experience. We are passionately dedicated to you and looking forward to serve you.",
  //     introimage:"https://www.hotelgnanam.com/hotel-in-thanjavur/corridor/thanjavur-hotel12.jpg",
  //     imageone:"https://www.hotelgnanam.com/header/thanjavur-hotel/thanjavurhotels.jpg",
  //     imagetwo:"https://www.hotelgnanam.com/hotel-in-thanjavur/corridor/thanjavur-hotel9.jpg",
  //     imagethree:"https://www.hotelgnanam.com/hotel-in-thanjavur/conference-hall/hall-in-tanjore6.jpg",
  //     imagefour:"https://www.hotelgnanam.com/hotel-in-thanjavur/minisuite/best-hotels2.jpg",
  //     imagefive:"https://www.hotelgnanam.com/hotel-in-thanjavur/conference-hall/hall-in-tanjore2.jpg",
  //     imagesix:"https://www.hotelgnanam.com/hotel-in-thanjavur/corridor/thanjavur-hotel3.jpg",
  //     imageseven:"https://www.hotelgnanam.com/hotel-in-thanjavur/deluxeroom/hotel-room7.jpg",
  //     imageeight:"https://www.hotelgnanam.com/hotel-in-thanjavur/deluxeroom-twin/hotels-room7.jpg",
  //     roomone:"https://www.hotelgnanam.com/hotel-in-thanjavur/deluxeroom/hotel-room4.jpg",
  //     roomtwo:"https://www.hotelgnanam.com/hotel-in-thanjavur/minisuite-twin/best-hotel1.jpg",
  //     roomthree:"https://www.hotelgnanam.com/hotel-in-thanjavur/minisuite/best-hotels7.jpg",
  //     roomfour:":https//www.hotelgnanam.com/hotel-in-thanjavur/deluxeroom-twin/hotels-room2.jpg",
  //     amountone:"3700",
  //     amounttwo:"3300",
  //     amountthree:"2900",
  //     amountfour:"2500",
  //     personone:"Srimathi",
  //     persontwo:"Vijiyalakshimi",
  //     personthree:"Shanmugam",
  //     reviewone:"I am very happy with their service.",
  //     reviewtwo:"This is really good place to make your journey happy.Good environment.",
  //     reviewthree:"This is really amazing one nice room structure",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Hotel Grand Ashok",
  //     place:"Thanjavur",
  //     address:"Opp to RTO Office, Trichy, Main road, Thanjavur, Tamil Nadu 613403•070949 669991",
  //     aboutus:" Hotel Grand Ashok welcomes you to the world of hospitality filled with dedicated service and upgraded amenities specifically designed with the spiritual/religious traveller in mind.  Located in the heart of historic and spiritual city of Thanjavur, Grand Ashok is an ideal place for stay and offers quality rooms with all the facilities & contemporary amenities to offer expediency to its guests.",
  //     introimage:"http://www.grandashok.com/img/gallery-p1.jpg",
  //     imageone:"http://www.grandashok.com/img/gallery-p2.jpg",
  //     imagetwo:"http://www.grandashok.com/img/gallery-p4.jpg",
  //     imagethree:"http://www.grandashok.com/img/gallery-p5.jpg",
  //     imagefour:"http://www.grandashok.com/img/gallery-p7.jpg",
  //     imagefive:"http://www.grandashok.com/img/gallery-p8.jpg",
  //     imagesix:"http://www.grandashok.com/img/gallery-p12.jpg",
  //     imageseven:"http://www.grandashok.com/img/gallery-p14.jpg",
  //     imageeight:"http://www.grandashok.com/img/gallery-p17.jpg",
  //     roomone:"http://www.grandashok.com/img/deluxe-room.jpg",
  //     roomtwo:"http://www.grandashok.com/img/premium-room.jpg",
  //     roomthree:"http://www.grandashok.com/img/gallery-p4.jpg",
  //     roomfour:"http://www.grandashok.com/img/gallery-p7.jpg",
  //     amountone:"5000",
  //     amounttwo:"4400",
  //     amountthree:"3500",
  //     amountfour:"3000",
  //     personone:"Kavishankari",
  //     persontwo:"Deevija",
  //     personthree:"kamatchi",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"I am very happy with their service.",
  //     reviewthree:"This is really amazing one nice room structure",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Daiwik Hotel",
  //     place:"Rameshwaram",
  //     address:"82 B (1), Madurai-Dhanushkodi, NH- 49,Near Rameswaram Bus stand,Rameswaram 623 526 Tamil Nadu, India",
  //     aboutus:"Daiwik Hotels, Rameswaram is a full service mid segment hotel with all modern amenities for a discerning traveler. The Rameshwaram hotel offers, 90 generously sized, well-appointed rooms in three categories, Superior, Deluxe and Suite. The design of the Rameswaram hotel takes inspiration from the intangible spirit of temple design.It is rated one of the best hotels in Rameswaram for food and hospitality. Amongst the hotels in Rameshwaram near the temple, Daiwik Hotel is located just 3 kms away from the Ramanathaswamy temple.",
  //     introimage:"https://www.daiwikhotels.com/wp-content/uploads/2016/06/banner1.png",
  //     imageone:"https://www.daiwikhotels.com/wp-content/uploads/2016/06/Ahaan-The-Restaurant.jpg",
  //     imagetwo:"https://www.daiwikhotels.com/wp-content/uploads/2016/06/banner4.jpg",
  //     imagethree:"https://www.daiwikhotels.com/wp-content/uploads/2020/01/img2_new.jpg",
  //     imagefour:"https://pix10.agoda.net/hotelImages/433/433110/433110_130207171604758.jpg?ca=0&ce=1&s=1024x768",
  //     imagefive:"https://i.travelapi.com/lodging/12000000/11530000/11520900/11520818/91f53b2c_z.jpg",
  //     imagesix:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH2412328113990/QS1042/QS1042-Q1/20190812_222001.jpg",
  //     imageseven:"https://content.r9cdn.net/rimg/himg/97/8e/33/expediav2-11520818-cf61bb12_z-190130.jpg?width=500&height=350&xhint=498&yhint=600&crop=true",
  //     imageeight:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcbvZ43lxWDw2xbBDWTNx-fB2-SatpIpsoA&usqp=CAU",
  //     roomone:"http://www.grandashok.com/img/deluxe-room.jpg",
  //     roomtwo:"https://pix10.agoda.net/hotelImages/433/433110/433110_130207171604758.jpg?ca=0&ce=1&s=1024x768",
  //     roomthree:"http://www.grandashok.com/img/gallery-p4.jpg",
  //     roomfour:"https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201205221143127701-b405529419d611ebb3590242ac110004.jpg",
  //     amountone:"4500",
  //     amounttwo:"4000",
  //     amountthree:"3700",
  //     amountfour:"3500",
  //     personone:"Kowsalaya",
  //     persontwo:"Deevija",
  //     personthree:"kavipriya",
  //     reviewone:"Cleanness is very good .",
  //     reviewtwo:"Very Good WiFi Connection ",
  //     reviewthree:"This is really amazing one nice room structure.",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"The Residency Towers",
  //     place:"Rameshwaram",
  //     address:"Madurai Dhanushkodi Road, Rameswaram ,Tamilnadu.",
  //     aboutus:"As the only hotel with five-star facilities in Rameswaram, The Residency Towers provides unrivalled comfort and unmatched convenience to make every second of your stay a wonderful memory.  Located just 2 km from the magnificent Ramanathaswamy Temple and close to other historical and leisure attractions, including Dr APJ Abdul Kalam Memorial, The Residency Towers makes an ideal place to stay and explore Rameswaram.",
  //     introimage:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_15,w_627,h_353,r_0,c_crop,q_80,fl_progressive/w_1650,f_auto,c_fit/the-residency-towers-rameswaram/About_2_xlsclq",
  //     imageone:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/Standardking_peky8f",
  //     imagetwo:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_1920,h_1080,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/11_xr9ret",
  //     imagethree:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_737,h_415,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/IMG_6794_m9u5fl",
  //     imagefour:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_737,h_415,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/IMG_6799_iljxmo",
  //     imagefive:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_737,h_415,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/IMG_6800_veqeth",
  //     imagesix:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_17,w_626,h_353,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/Restaurant-_-Bar_01_ltf9ic",
  //     imageseven:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_86,w_1920,h_1080,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/RESPA_knnkgn",
  //     imageeight:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/standardtwin_qmqbrq",
  //     roomone:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_960,f_auto,c_fit/the-residency-towers-rameswaram/Standardking_peky8f",
  //     roomtwo:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_960,f_auto,c_fit/the-residency-towers-rameswaram/standardtwin_qmqbrq",
  //     roomthree:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_960,f_auto,c_fit/the-residency-towers-rameswaram/Kingwihtpoolview_nikx9j",
  //     roomfour:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_960,f_auto,c_fit/the-residency-towers-rameswaram/Twinwithpoolview_rtuapy",
  //     amountone:"5000",
  //     amounttwo:"4600",
  //     amountthree:"4000",
  //     amountfour:"3600",
  //     personone:"Srimathi",
  //     persontwo:"Vijiyalakshimi",
  //     personthree:"Shanmugam",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"I am very happy with their service.",
  //     reviewthree:"This is really amazing one nice room structure.",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"The Park",
  //     place:"Chennai",
  //     address:"601, Anna Salai, Chennai 600006,+91-44-64804425",
  //     aboutus:"The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Chennai City Center, allowing you access and proximity to local attractions and sights.Comfortable Environment,Our hotel is placed in the center of the city so that you can make your trip easier ",
  //     introimage:"https://www.theparkhotels.com/images/site-specific/chennai/homepage-pilers-min.jpg",
  //     imageone:"https://www.theparkhotels.com/images/site-specific/chennai/dining/aqua/THE-Park-Chennai-Aqua-poolside-2.jpg",
  //     imagetwo:"https://www.theparkhotels.com/images/site-specific/chennai/rooms/luxury-rooms/HERO-SHOT-Luxury-Twin-Room.jpg",
  //     imagethree:"https://www.theparkhotels.com/images/site-specific/chennai/dining/six-o-one/six-o-one.jpg",
  //     imagefour:"https://www.theparkhotels.com/images/site-specific/chennai/rooms/premier_suites/hero-shot-premier-suite.jpg",
  //     imagefive:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/bathtub---presidential-suite--6001.jpg",
  //     imagesix:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/deluxe-room-1.jpg",
  //     imageseven:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/fitness-centre--cardio-section.jpg",
  //     imageeight:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/the-park-chennai-aug15-0821.jpg",
  //     roomone:"https://www.theparkhotels.com/images/site-specific/chennai/rooms/premier_suites/hero-shot-premier-suite1.jpg",
  //     roomtwo:"https://www.theparkhotels.com/images/site-specific/chennai/rooms/luxury-rooms/HERO-SHOT-Luxury-Twin-Room.jpg",
  //     roomthree:"https://www.theparkhotels.com/images/site-specific/chennai/hero-shot-detailed-shot-of-new-suite-room.jpg",
  //     roomfour:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/deluxe-twin-room-1.jpg",
  //     amountone:"6000",
  //     amounttwo:"5000",
  //     amountthree:"4000",
  //     amountfour:"3000",
  //     personone:"Kiruthiga",
  //     persontwo:"Sowthika",
  //     personthree:"Kavipriya",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"Good place to make fun movements with family",
  //     reviewthree:"Good customer carrying ",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Taj Coromandal",
  //     place:"Chennai",
  //     address:"Mahatma Gandhi Salai, CHENNAI, TamilNadu, 600034.+91-44-64804425",
  //     aboutus:"Taj Coromandel, one of the finest 5 star hotel in Chennai presents a rich fusion of South Indian design and classic eleganceWith 212 rooms and suites in Chennai, the intimate five-star hotel has played host to famous political figures such as President Jimmy Carter, His Royal Highness Prince Andrew, President Bill Clinton, and the Emperor and Empress of Japan ",
  //     introimage:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/M&C_31Mandapam-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imageone:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/coro-17-1.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imagetwo:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/E&D_Chipstead19-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imagethree:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/coro-2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imagefour:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/M&C_TheWellingdon2-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imagefive:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/Taj%20Club%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imagesix:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/SE_28GoldenKeysconceirgewithtiesandwatch-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imageseven:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/E&D_Prego2-3x2.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",
  //     imageeight:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/Executive%20Suite%20Living%20Area.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     roomone:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/01%20-%20Luxury%20Room.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
  //     roomtwo:"http://www.grandashok.com/img/premium-room.jpg",
  //     roomthree:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/Executive%20Suite%20Living%20Area.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
  //     roomfour:"http://www.grandashok.com/img/gallery-p7.jpg",
  //     amountone:"6400",
  //     amounttwo:"5600",
  //     amountthree:"4800",
  //     amountfour:"3700",
  //     personone:"Srimathi",
  //     persontwo:"Vijiyalakshimi",
  //     personthree:"Shanmugam",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"I am very happy with their service.",
  //     reviewthree:"This is really amazing one nice room structure.",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"KS Hotel",
  //     place:"Ooty",
  //     address:"KS Hotel, Woodcock Rd, near Lake Boat House, Kandal, Ooty, Tamil Nadu 643001",
  //     aboutus:"Overlooking the Nilgiri Hills, this lavish property offers stylish rooms, a dining venue and easy connectivity to popular areas of the city.Wake up to the stunning views of the Niligiri Hills. Enjoy the property's close proximity to Ooty Lake which is 260 m away from the property.",
  //     introimage:"https://r1imghtlak.mmtcdn.com/0cda12be496d11ea9dcf0242ac110002.jpg",
  //     imageone:"https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-darshan-ooty-ooty-56452.jpg",
  //     imagetwo:"https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-darshan-ooty-ooty-56452.jpg",
  //     imagethree:"https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-darshan-ooty-ooty-56453.jpg",
  //     imagefour:"https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-darshan-ooty-ooty-56455.jpg",
  //     imagefive:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/Taj%20Club%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imagesix:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/SE_28GoldenKeysconceirgewithtiesandwatch-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
  //     imageseven:"https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-darshan-ooty-ooty-56451.jpg",
  //     imageeight:"https://www.indianholiday.com/pictures/hotel/rooms/standard-rooms-6980.jpeg",
  //     roomone:"https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-darshan-ooty-ooty-56453.jpg",
  //     roomtwo:"http://www.grandashok.com/img/premium-room.jpg",
  //     roomthree:"https://r1imghtlak.mmtcdn.com/1bb985b88c5b11e59cbf0015c5f4277e.jfif?downsize=990:500&crop=990:500",
  //     roomfour:"http://www.grandashok.com/img/gallery-p7.jpg",
  //     amountone:"5800",
  //     amounttwo:"4700",
  //     amountthree:"4000",
  //     amountfour:"3800",
  //     personone:"Vimalraj",
  //     persontwo:"Vijiyalakshimi",
  //     personthree:"Saraswhavathi",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"This is really amazing one nice room structure.",
  //     reviewthree:"I am very happy with their service.",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Sterling Ooty Fern Hill",
  //     place:"Ooty",
  //     address:"73, Kundah House Road, Fern Hill, Ooty, Tamil Nadu 643004",
  //     aboutus:"Sterling Ooty – Fern Hill, is spread over 7 acres on a hilltop with a view of the Ooty toy train chugging past. Explore the unique D&E Impressions, spa, bar & enjoy fresh produce from the organic garden. Indulge in indoor & outdoor games within the resort..Sterling Ooty - Fern Hill with its 175 well-appointed rooms, provides you with all the comfort to take a break in the hills. The resort also has its own organic vegetable garden. The fresh produce of the garden is used in the kitchen.",
  //     introimage:"https://www.sterlingholidays.com/resorts/herobanner/aug2022/sterling-ooty-fernhill-hero-banner.jpg",
  //     imageone:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image2.jpg.imgw.1280.1280.jpeg",
  //     imagetwo:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image3.jpg.imgw.1280.1280.jpeg",
  //     imagethree:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image4.jpg.imgw.1280.1280.jpeg",
  //     imagefour:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image11.jpg.imgw.1280.1280.jpeg",
  //     imagefive:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image6.jpg.imgw.1280.1280.jpeg",
  //     imagesix:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image12.jpg.imgw.1280.1280.jpeg",
  //     imageseven:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image18.jpg.imgw.1280.1280.jpeg",
  //     imageeight:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image8.jpg.imgw.1280.1280.jpeg",
  //     roomone:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image5.jpg.imgw.1280.1280.jpeg",
  //     roomtwo:"http://www.grandashok.com/img/premium-room.jpg",
  //     roomthree:"https://r1imghtlak.mmtcdn.com/1bb985b88c5b11e59cbf0015c5f4277e.jfif?downsize=990:500&crop=990:500",
  //     roomfour:"https://www.sterlingholidays.com/content/dam/sterlingholidays/resorts/galleryslider/ooty-fernhill/new-aug-2022/sterling-ooty-fernhill-gallery-image4.jpg.imgw.1280.1280.jpeg",
  //     amountone:"4000",
  //     amounttwo:"3800",
  //     amountthree:"2900",
  //     amountfour:"1500",
  //     personone:"kalaivani",
  //     persontwo:"Vimalraj",
  //     personthree:"kavipriya",
  //     reviewone:"Food facilities are really good",
  //     reviewtwo:"I am very happy with their service.",
  //     reviewthree:"They are good transprt spcilities",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Hotel Ocean Heritage",
  //     place:"Kanniyakumari",
  //     address:"2, 11B, E Car St, opp. Hotel MAadhini, Kanyakumari, Tamil Nadu 620702",
  //     aboutus:"We offer a variety of amenities to make your Stay with us as comfortable as possible. DTH is available in every room.  Free WiFi Travel Desk, Baggage room, Valet Parking Available. Rooms maintained by this hotel offer a captivating. These rooms are appointed with all basic facilities,  the rooms are comfortable and offer sound sleep to guest ..Efficient room service provided by this hotel make the stay pleasurable for Guest.",
  //     introimage:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/b00569ff-435a-451b-b5e1-ca9010b78bdc.JPG/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc",
  //     imageone:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/60423708-e45e-410e-98ba-06a8dc04cd80.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1747",
  //     imagetwo:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/fc7fcda6-bd29-4a37-acd7-e19dfe28ed45.JPG/:/rs=w:1160",
  //     imagethree:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/00644eef-69d2-4f43-88a5-ff7cc54aa852.JPG/:/rs=w:1160",
  //     imagefour:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/9ab9fb6e-6630-4b2b-8e21-f29fc02bd876.JPG/:/rs=w:1160",
  //     imagefive:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/b315b677-47ce-4982-bd23-4d4b10083b91.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:770",
  //     imagesix:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/28185d4a-d33e-4723-adf9-ceb5a390eda6.JPG/:/rs=w:1160",
  //     imageseven:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/3191ae0f-a918-46a9-8198-6cf9ecb5583f.JPG/:/rs=w:1160",
  //     imageeight:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/617440f7-509a-4542-aa9b-3cff05565275.JPG/:/rs=w:1160",
  //     roomone:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/9ab9fb6e-6630-4b2b-8e21-f29fc02bd876.JPG/:/rs=w:1160",
  //     roomtwo:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/d8319e88-9ea7-4c1f-b741-7c967b116297.JPG/:/rs=w:1160",
  //     roomthree:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/f2a4890d-b4cb-46f5-9de9-ca5dfd9c26ef.JPG/:/rs=w:1160",
  //     roomfour:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/1dfc4210-0c3a-4ce0-9765-7f31d439c6d7.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:770",
  //     amountone:"5800",
  //     amounttwo:"4900",
  //     amountthree:"4000",
  //     amountfour:"3500",
  //     personone:"Vimalraj",
  //     persontwo:"Vijiyalakshimi",
  //     personthree:"Saraswhavathi",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"This is really amazing one nice room structure.",
  //     reviewthree:"I am very happy with their service.",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Sparsa Resort",
  //     place:"Kanniyakumari",
  //     address:"6/112 B, Beach Road,Near Sunset Point,Kanyakumari, Tamilnadu",
  //     aboutus:"Sparsa Kanyakumari is undoubtedly one of the best luxury resorts in Kanyakumari. It is conveniently located at a walking distance from the shore, with rooms overlooking the blue ocean on the one side and offering tourists a glimpse of the typical quaint town on the other end",
  //     introimage:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Sparsa-Resorts-in-Kanyakumari.jpg",
  //     imageone:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Lobby-at-Sparsa-Resorts-Kanyakumari.jpg",
  //     imagetwo:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Restaurant-at-Sparsa-Resorts-Kanyakumari-1.jpg",
  //     imagethree:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Swimming-Pool-at-Sparsa-Resorts-Kanyakumari.jpg",
  //     imagefour:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Luxury-Amenities-in-Sparsa-Resorts-Kanyakumari-700x466.jpg",
  //     imagefive:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Suits-at-Sparsa-Resorts-Kanyakumari.jpg",
  //     imagesix:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Rooms-at-Sparsa-Resorts-Kanyakumari.jpg",
  //     imageseven:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Business-Meeting-Hall-in-Kanyakumari.jpg",
  //     imageeight:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Conference-Hall-at-Sparsa-Resorts-Kanyakumari-1.jpg",
  //     roomone:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Luxury-Amenities-in-Sparsa-Resorts-Kanyakumari.jpg",
  //     roomtwo:"https://img1.wsimg.com/isteam/ip/b43858b0-d83a-4832-ba98-d7ee78eaf0fe/d8319e88-9ea7-4c1f-b741-7c967b116297.JPG/:/rs=w:1160",
  //     roomthree:"https://sparsaresorts.com/kanyakumari/wp-content/uploads/2019/12/Rooms-at-Sparsa-Resorts-Kanyakumari.jpg",
  //     roomfour:"https://r1imghtlak.mmtcdn.com/1bb985b88c5b11e59cbf0015c5f4277e.jfif?downsize=990:500&crop=990:500",
  //     amountone:"4900",
  //     amounttwo:"4200",
  //     amountthree:"3800",
  //     amountfour:"2800",
  //     personone:"Kavishankari",
  //     persontwo:"Deevija",
  //     personthree:"kamatchi",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"I am very happy with their service.",
  //     reviewthree:"This is really amazing one nice room structure",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"KTDC Hotel",
  //     place:"Kerala",
  //     address:"Kovalam, Thiruvananthapuram, Kerala 695527•0471 248 0089",
  //     aboutus:"We offer a variety of amenities to make your Stay with us as comfortable as possible. DTH is available in every room.  Free WiFi Travel Desk, Baggage room, Valet Parking Available. Rooms maintained by this hotel offer a captivating. These rooms are appointed with all basic facilities,  the rooms are comfortable and offer sound sleep to guest ..Efficient room service provided by this hotel make the stay pleasurable for Guest.",
  //     introimage:"https://www.tourmyindia.com/blog//wp-content/uploads/2014/11/ktdc-hotels-in-kerala.jpg",
  //     imageone:"https://www.hotelgnanam.com/header/thanjavur-hotel/thanjavurhotels.jpg",
  //     imagetwo:"https://www.hotelgnanam.com/hotel-in-thanjavur/corridor/thanjavur-hotel9.jpg",
  //     imagethree:"http://www.grandashok.com/img/gallery-p5.jpg",
  //     imagefour:"http://www.grandashok.com/img/gallery-p7.jpg",
  //     imagefive:"https://i.travelapi.com/lodging/12000000/11530000/11520900/11520818/91f53b2c_z.jpg",
  //     imagesix:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH2412328113990/QS1042/QS1042-Q1/20190812_222001.jpg",
  //     imageseven:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_86,w_1920,h_1080,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/RESPA_knnkgn",
  //     imageeight:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_30,w_960,h_540,r_0,c_crop,q_80,fl_progressive/w_910,f_auto,c_fit/the-residency-towers-rameswaram/standardtwin_qmqbrq",
  //     roomone:"https://www.theparkhotels.com/images/site-specific/chennai/rooms/premier_suites/hero-shot-premier-suite1.jpg",
  //     roomtwo:"https://www.theparkhotels.com/images/site-specific/chennai/rooms/luxury-rooms/HERO-SHOT-Luxury-Twin-Room.jpg",
  //     roomthree:"https://www.theparkhotels.com/images/site-specific/chennai/hero-shot-detailed-shot-of-new-suite-room.jpg",
  //     roomfour:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/deluxe-twin-room-1.jpg",
  //     amountone:"5300",
  //     amounttwo:"4700",
  //     amountthree:"4000",
  //     amountfour:"3600",
  //     personone:"Kiruthiga",
  //     persontwo:"Sowthika",
  //     personthree:"Kavipriya",
  //     reviewone:"This is really good place to make your journey happy.Good environment.",
  //     reviewtwo:"Good place to make fun movements with family",
  //     reviewthree:"Good customer carrying ",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   },
  //   {
  //     hotelname:"Townbridge Hotels & Suites PVT Ltd Hotel",
  //     place:"Kerala",
  //     address:"DH Road, Near Ernakulam South Railway Station, Ernakulam, 682035 Cochin, India",
  //     aboutus:"Located in Cochin, 12 km from Kochi Biennale, Townbridge Hotels & Suites PVT Ltd features views of the city. Among the facilities at this property are room service and a concierge service, along with free WiFi throughout the property. The property has a garden, as well as a restaurant that serves Chinese and Indian cuisine At the hotel, every room comes with a desk, a flat-screen TV, a private bathroom, bed linen and towels. At Townbridge Hotels & Suites PVT Ltd, each room is equipped with air conditioning and a safety deposit box.",
  //     introimage:"https://townbridgehotels.com/assets/images/tw_banner.jpg",
  //     imageone:"https://townbridgehotels.com/assets/images/slider-1.jpg",
  //     imagetwo:"https://townbridgehotels.com/assets/images/slider-3.jpg",
  //     imagethree:"https://townbridgehotels.com/assets/images/about.jpg",
  //     imagefour:"https://townbridgehotels.com/assets/images/slider-2.jpg",
  //     imagefive:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/409192655.jpg?k=38e6345594c03e4f57e805b98c3df344da3a70cf21bf1f708703984d3bdb99bf&o=&hp=1",
  //     imagesix:"https://townbridgehotels.com/assets/images/slide_1.jpg",
  //     imageseven:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/409192617.jpg?k=96b51260a0aa3acc03aa36f193bc89fd94a2ca0a0857962b798026fa3b02ee19&o=&hp=1",
  //     imageeight:"https://townbridgehotels.com/assets/images/slide_1.jpg",
  //     roomone:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/409192655.jpg?k=38e6345594c03e4f57e805b98c3df344da3a70cf21bf1f708703984d3bdb99bf&o=&hp=1",
  //     roomtwo:"http://www.grandashok.com/img/premium-room.jpg",
  //     roomthree:"https://r1imghtlak.mmtcdn.com/1bb985b88c5b11e59cbf0015c5f4277e.jfif?downsize=990:500&crop=990:500",
  //     roomfour:"http://www.grandashok.com/img/gallery-p7.jpg",
  //     amountone:"4990",
  //     amounttwo:"4198",
  //     amountthree:"3400",
  //     amountfour:"2987",
  //     personone:"Nivethitha",
  //     persontwo:"kowsalaya",
  //     personthree:"kiruthika",
  //     reviewone:"Cleanness is very good .",
  //     reviewtwo:"Very Good WiFi Connection ",
  //     reviewthree:"This is really amazing one nice room structure.",
  //     typeone:"Deluxe-room",
  //     typetwo:"Deluxeroom-Twin",
  //     typethree:"Single-room",
  //     typefour:"Double-room"
  //   }
    
  //  ]
  //  let filter=particularhoteldetails.filter((obj)=>{return obj.hotelname==this.hotelname.getplacename()})
  //  this.filteredvalues=filter;
  //  console.log(this.filteredvalues);
  //  console.log(this.typeoneamount);
   
  }
  getDescription()
    {
        this.http.get("https://localhost:7078/api/HotelInformationAdmin")
        .subscribe((resultData:any)=>
        {
            this.descriptions=resultData;
            console.log(this.descriptions);
            this.filteredvalues=this.descriptions.filter((obj)=>{return obj.hotelname==this.hotelname.getplacename()});
        console.log(this.filteredvalues);
        });
        
    }
  
  getamount(nofrooms,noofdays,enteredpersoncount,amount,typeofhotel,availableroomcount,noofperson){
    if(nofrooms>availableroomcount || enteredpersoncount>noofperson  ){
      alert("Please select based on the availability")
    }
    else{
      if(typeofhotel==="Deluxe-room")
    {
      this.typeoneamount=nofrooms*noofdays*amount;
      this.totalrooms=nofrooms+this.totalrooms;
      
    }
    if(typeofhotel==="Deluxeroom-Twin")
    {
      this. typetwoamount=nofrooms*noofdays*amount;
      this.totalrooms=nofrooms+this.totalrooms;
    }
    if(typeofhotel==="Single-room")
    {
      this. typethreeamount=nofrooms*noofdays*amount;
      this.totalrooms=nofrooms+this.totalrooms;
    }
    if(typeofhotel==="Double-room")
    {
      this.typefouramount=nofrooms*noofdays*amount;
      this.totalrooms=nofrooms+this.totalrooms;
    }
    
    }
    
   
     
  }

  Grandtotal(hotelname){
  this.totalamount=this.typeoneamount+this.typetwoamount+this.typethreeamount+this.typefouramount;
  console.log(this.totalamount);
  console.log(this.totalrooms);
  this.amountservice.setamount(this.totalamount);
  this.amountservice.setotalrooms(this.totalrooms);
  this.amountservice.sethotelname(hotelname);
  const bodyData={
    "UserId":this.userid,
    "Hotelname":hotelname,
    "Email":this.email,
    "Deulexroombooked":this.roomone,
    "Deluexetwinrrombooked":this.roomtwo,
    "Singleroombooked":this.roomthree,
    "Doubleroombooked":this.roomfour,
    "Noofrooms":this.totalrooms,
    "Amount":this.totalamount
   }
  
  this.http.post("https://localhost:7078/api/user/BookedRoomDetails",bodyData)
  .subscribe((resultData:any)=>
  {});
  }
//   @HostListener('window:popstate',['$event'])
//   onpopstate(event:Event){
//     this.location.forward();
//  }
  }
  