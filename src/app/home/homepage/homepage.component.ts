import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private location:Location,private http:HttpClient){}


  valuetwo:string|undefined;
  placedata:any;
  descriptions:any;
  
// placedata=[{
//   placename:"Thanjavur",
//   placestate:"Tamilnadu",
//   placeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNURw5N3XcR1357gEHNktb1IzSgYqmZalhpg&usqp=CAU",
//   placeinformation:"Thanjavur",
//   detailedinformation:"Brihadeeshwara Temple (Peruvudaiyar Kovil) is a Hindu temple dedicated to Shiva located in Thanjavur in the Indian state of Tamil Nadu It is also known as Periya Kovil, RajaRajeswara Temple andRajarajesvaram. It is one of the largest temples in India and is an example of Dravidian architecture during the Chola period. Built by emperor Raja Raja Chola I and completed in 1010 AD, the temple turned 1000 years old in 2010. The temple is part of the UNESCO World Heritage Site known as the Great Living Chola Temples, with the other two being the Brihadeeswarar Temple, Gangaikonda Cholapuram andAiravatesvara temple."
// },
// {
//   placename:"Rameshwaram",
//   placestate:"Tamilnadu",
//   placeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-9ZY_8Jbwixi8LqkF1JWXAeKE_bUtKIseg&usqp=CAU",
//   placeinformation:"Rameshwaram",
//   detailedinformation:"Pamban Bridge is a railway bridge that connects the town of Mandapam in mainland India with Rameswaram on Pamban Island. Opened on 24 February 1914,it was India's first sea bridge, and was the longest sea bridge in India until the opening of the Bandra-Worli Sea Link in 2010. The rail bridge is, for the most part, a conventional bridge resting on concrete piers but has a double-leaf bascule section midway, which can be raised to let ships and barges pass through. Until 1988, the Pamban bridge was the only surface transport that connected Tamil Nadu's island of Rameswaram to the mainland India."
// },

// {
//   placename:"Marina beach",
//   placestate:"Tamilnadu",
//   placeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxkXrt0sIwbcuvDynKWMuuq2lHZ05LjTNyg&usqp=CAU",
//   placeinformation:"Marina beach",
//   detailedinformation:"Marina Beach in Chennai is India’s longest beach and world’s second longest beach.The beach stretches over 13 kilometers and is quite an interesting travel spot, especially if your motive is to rejuvenate and perhaps capture some good photographs of the dusking sky. Not just this, it is a must-visit place for history lovers as well, as they will get to see the magnificent statues of prominent dignitaries from Indian history."
// },
// {
//   placename:"Ooty",
//   placestate:"Tamilnadu",
//   placeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMgdqRQLXTRA4nABgu03Zru__QcBNe1TQ3g&usqp=CAU",
//   placeinformation:"Ooty",
//   detailedinformation:"Ooty is a town and a municipality in the Nilgiris district of the South Indian state of Tamil Nadu. It is located 86 km (53 mi) north west of Coimbatore ,100 km (65 mi) north west of Tirupur ,128 km (80 mi) south of Mysore and is the headquarters of the Nilgiris district. It is a popular hill station located in the Nilgiri Hills. It is popularly called the Queen of Hill Stations. It was the summer capital of the Madras Presidency."
// },
// {
//   placename:"Kanyakumari",
//   placestate:"Tamilnadu",
//   placeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9_dWy9uu0SI6GF38j-i4BIbFDsAPjBG7uA&usqp=CAU",
//   placeinformation:"Kanyakumari",
//   detailedinformation:"Kanniyakumari is a popular tourist destination and pilgrimage centre in India. Notable tourist spots include its unique sunrise and sunset points, the 41-metre (133 ft) Thiruvalluvar Statue, and Vivekananda Rock Memorial off the coast. Lying at the tip of peninsular India, the town is bordered on the west, south, and east by the Laccadive Sea. It has a coastline of 71.5 kilometres (44.4 mi) stretched along these three sides."

// },
// {
//   placename:"Athirapally",
//   placestate:"Tamilnadu",
//   placeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXpTXVG-owzVrLbo9eohbsS3Y8TOOSAN9Lw&usqp=CAU",
//   placeinformation:"Athirapally",
//   detailedinformation:"Athirapilly Falls, is situated in Athirapilly Panchayat in Chalakudy Taluk of Thrissur District in Kerala, India on the Chalakudy River, which originates from the upper reaches of the Western Ghats at the entrance to the Sholayar ranges. It is the largest waterfall in Kerala, which stands tall at 81.5 feet. Just a short drive from Athirapilly to the Vazhachal falls, which is close to dense green forests that are home to many endangered and endemic species of flora and fauna."
// },
// ]
ngOnInit():void{
  this.getDescription();
}
getDescription()
    {
        this.http.get("https://localhost:7000/api/ListOfPlaces")
        .subscribe((resultData:any)=>
        {
            this.descriptions=resultData;
            console.log(this.descriptions);
            this.placedata=this.descriptions;
        });
        
      }
@HostListener('window:popstate',['$event'])
  onpopstate(event:Event){
    this.location.forward();
 }
}
