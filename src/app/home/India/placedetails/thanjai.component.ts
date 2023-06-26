import { Component ,Input} from '@angular/core';
import { PlacenameService } from '../../../services/placename.service';
import { HotelnameService } from 'src/app/services/hotelname.service';
import{HttpClient} from '@angular/common/http';
//import * as placeinfo  from "../../assets/detailedplaceinformation.json";
//import  detailedplaceinformation from  '../../assets/detailedplaceinformation.json'

//import { AllinfoService } from 'src/app/services/allinfo.service';
@Component({
  selector: 'app-thanjai',
  templateUrl: './thanjai.component.html',
  styleUrls: ['./thanjai.component.css']
})

export class ThanjaiComponent {
  @Input() value: any;
  @Input() item: any;
  placevalue:any;
  
  constructor(public placename:PlacenameService ,public nameofthehotel: HotelnameService,private http:HttpClient){}
  filteredvalues:any;
  descriptions:any;
  listOfHotels:any;
  filteredhotels:any;
  hotelname: string='';
  ngOnInit():void{
    
      // const detailedplaceonfo=[{
        
      //   heading:"Brihadeeswarar Temple",
      //   name:"Thanjavur",
      //   textone:" Brihadeeshwara Temple (Peruvudaiyar Kovil) is a Hindu temple dedicated to Shiva located in Thanjavur in the Indian state of Tamil Nadu. It is also known as Periya Kovil, RajaRajeswara Temple and Rajarajesvaram. It is one of the largest temples in India and is an example of Dravidian architecture during theChola period. Built by emperor Raja Raja Chola I and completed in 1010 AD, the temple turned 1000 years old in2010. The temple is part of the UNESCO World Heritage Site known as the Great Living Chola Temples, with theother two being the Brihadeeswarar Temple, Gangaikonda Cholapuram andAiravatesvara temple.",
      //   imageone:"https://i.pinimg.com/736x/44/18/28/44182891e912e0f99d53595969643952.jpg",
      //   texttwo:"The temple stands amidst fortified walls that were probably added in the 16th century. The vimanam (temple tower) is 216 ft (66 m) high and is the tallest in the world. The Kumbam (the apex or the bulbous structure on the top) of the temple is carved out of a single rock and weighs around 80 tons. There is a big statue of Nandi (sacred bull), carved out of a single rock measuring about 16 ft (4.9 m) long and 13 ft (4.0 m) high at the entrance. The entire temple structure is made out of granite, the nearest sources of which are about 60 km to the west of temple. The temple is one of the most visited tourist attractions in Tamil Nadu.",
      //   imagetwo:"https://www.toptamilnews.com/static/c1e/client/88252/migrated/ee30c99e36eb7b2f31b02d126a1ce7bc.jpg",
      //   headingtwo:"History of Brihadeeswarar Temple",
      //   textthree:"Arulmozhivarman, a Tamil emperor who was popular as Rajaraja Chola I laid out foundations of Brihadeeswarar Temple during 1002 CE. It was first among other great building projects by Tamil Chola. A symmetrical and axial geometry rules layout of this temple. Temples from same period and two following centuries are expressions of Tamils Chola power, artistic expertise and wealth. Emergence of these types of features, such as multifaceted columns along with projecting signals of square capitals signifies arrival of Chola style, which was new at that time.",
      //   textfour:"It is one architectural exemplar, which showcases true form of Dravida kind of architecture in temples and is a representative of ideology of Chola Empire and Southern India’s Tamil civilization. Brihadeeswarar Temple testifies to Chola’s brilliant achievements in architecture, painting, bronze casting and sculpture.",
      //   textfive:"The greatest of Chola emperors Rajaraja-I (985 A.D - 1012 A.D) the son of Sundara Chola (Parantaka-II) and Vanavan mahadevi built this magnificent temple named Brihadisvaram at Thanjavur - the capital of Chola dynasty. From the Epigraphical evidence it is known about Rajaraja-I started building this temple on his 19th year and completed on 275th day of his 25th year. It took just 6 years to complete this work on 1010 A.D.",
      //   imagethree:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Big_Temple-Temple.jpg/200px-Big_Temple-Temple.jpg",
      //   textsix:"On the 275th day of his 25th year as king (1010 CE) Raja Raja Chola handed over a gold-plated Kalasam (copper pot or finial) to crown the vimana (dome) as the final consecration of the temple. Brihadeeswarar Temple was the nerve  center of the Chola Empire and attracted musicians, scholars, craftsman and merchants. It particularly served as a platform for dancers who excelled in the traditional dance form of Sadir, which is now known as Bharatha Natyam.",
      //   textseven:"The Chola reign declined and they were ousted by the Pandyas who were in turn thrown over by the Vijayanagara Empire. In 1535, the Vijayanagara king installed a Nayak king and the clan, called Tanjore Nayaks, reigned till the mid-17th century. In 1674, the Marathas conquered Tanjore. Later, like the rest of the country, Thanjavur to fell into British hands.",
      //   imagefour:"https://static.sadhguru.org/d/46272/1650441692-thanjai-periya-kovil-nandi.jpg",
      //   hotellinkone:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e6/f1/06/hotel-gnanam.jpg?w=700&h=-1&s=1",
      //   hotellinktwo:"https://lh3.googleusercontent.com/p/AF1QipND8OEJKyqWYPU338gYmf_5EGuw6_2zoNHDai19=w296-h202-n-k-rw-no-v1",
      //   hotelonename:"Hotel Gnanam",
      //   hoteltwoname:"Hotel Grand Ashok",
      //   hotelonelink:"/home/Hotels/thanjaihotelone",
       
      //   },
      //   {
      //   heading:"Pamban Bridge",
      //   name:"Rameshwaram",
      //   textone:"Pamban Bridge is a railway bridge that connects the town of Mandapam in mainland India with Rameswaram on Pamban Island. Opened on 24 February 1914,it was India's first sea bridge, and was the longest sea bridge in India until the opening of the Bandra-Worli Sea Link in 2010. The rail bridge is, for the most part, a conventional bridge resting on concrete piers but has a double-leaf bascule section midway, which can be raised to let ships and barges pass through. Until 1988, the Pamban bridge was the only surface transport that connected Tamil Nadu's island of Rameswaram to the mainland India. On 23 December 2022, the bascule of this bridge was damaged due to extreme corrosion and so the sensors gave continuous warning signal which suspended transportation on the bridge for permanently. The last train which was officially ran on this bridge was Train no. 07695 Secunderabad Rameswaram Special which completed its commercial journey on the day end of 22 December 2022.",
      //   imageone:"https://english.cdn.zeenews.com/sites/default/files/2022/05/31/1048551-pamban-bridge-main.jpg",
      //   texttwo:"In 1988, a road bridge was also constructed parallel to the rail bridge. This road bridge is also known as Annai Indira Gandhi Road Bridge. The Annai Indira Gandhi Road Bridge connects the National Highway (NH 49) with the Rameswaram island. It stands on the Palk Strait and between the shores of Mandapam (a place on the Indian mainland) and Pamban (one of the fishing towns on Rameswaram island). ",
      //   imagetwo:"https://img.etimg.com/thumb/msid-97625626,width-560,height-420,imgsize-34232/tamil-nadu-pamban-bridge-in-rameswaram-opens-up-for-fishing-boats.jpg",
      //   headingtwo:"History of Pamban Bridge",
      //   textthree:"Plans for a bridge to connect to mainland was suggested in 1870 as the British Administration sought ways to increase trade with Ceylon. The construction began in August 1911 and was opened on 24 February 1914. The adjacent road bridge was opened in 1988.[10] As of 5 December 2018, the bridge was closed due to a crack in the bridge and the maintenance work is going on. The Indian Railway Minister Piyush Goyal announced that a new railway bridge will be constructed near the old Pamban Bridge at a cost of ₹250 crores. This new dual track bridge is planned to be constructed in automotive mode, allowing two ships to pass this bridge at the same time",
      //   textfour:" The Pamban railway bridge spans a 2.06 km wide strait between the Indian mainland and Rameswaram Island. The mainland end of the bridge is located at 9°16′56.70″N 79°11′20.12″E. The bridge is located in a corrosive marine environment, making its maintenance a challenging job. The location is also a cyclone-prone, high-wind-velocity zone.",
      //   textfive:"And also it has historical stories . Rammayanam story ended here.Bridge was maded to srilankha  to got the seetha.It has done with the help of many people ,and also it has lots of stories.",
      //   imagethree:"https://casualwalker.com/wp-content/uploads/2021/05/Pamban_Bridge_Mandapam_Rameswaram_00012.jpg",
      //   textsix:"However, in 1988, the bridge was retrofitted to include a double-leaf bascule section, allowing ships and ferries to pass through The bascule section can be raised to an angle of 45 degrees, creating an opening for vessels to navigate beneath the bridge. Paamban Palam offers breathtaking views of the surrounding ocean, especially during sunrise and sunset.",
      //   textseven:"The bridge is not only a crucial transportation route but also a popular tourist attraction, drawing visitors who are fascinated by its engineering and scenic beauty.",
      //   imagefour:"https://media.dailythanthi.com/h-upload/2022/10/02/907892-pamban.webp",
      //   hotellinkone:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201205221143127701-e4002706e8b211ec86520a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;11,0&output-format=jpg",
      //   hotellinktwo:"https://res.cloudinary.com/simplotel/image/upload/x_0,y_15,w_627,h_353,r_0,c_crop,q_80,fl_progressive/w_1650,f_auto,c_fit/the-residency-towers-rameswaram/About_2_xlsclq",
      //   hotelonename:"Daiwik Hotel",
      //   hoteltwoname:"The Residency Towers",
      //   hotelonelink:"/home/Hotels/thanjaihotelone",
       
      //   },
      //   {
      //     heading:"Chennai",
      //     name:"Marina beach",
      //     textone:"Popular as the longest beach in India, Marina Beach is one of its kind across the world. Named after the Italian word Marina, the beach has come across as one of the famous travel getaways in Chennai since its establishment.The beach stretches over 13 kilometers and is quite an interesting travel spot, especially if your motive is to rejuvenate and perhaps capture some good photographs of the dusking sky. Not just this, it is a must-visit plac for history lovers as well, as they will get to see the magnificent statues of prominent dignitaries from Indian history.",
      //     imageone:"https://gumlet.assettype.com/swarajya/2022-07/0d636cb3-d14a-4bf4-a833-797583018303/E92dtZ_VgAENEUa.jpg",
      //     texttwo:" Due to the rise in sea level, there used to be many incidents of inundation here, especially before the 16th century. However, when the sea withdrew a little, multiple ridges and lagoons remained. It was during those times, that specifically, a sand ridge ran from the mouth of Cooum to the present spot which is known as the Presidenc college. This ridge in the present times is Marina Beach.",
      //     imagetwo:"https://t3.ftcdn.net/jpg/02/91/10/18/360_F_291101882_DGNc12xGaK3gpEJot07S6gUh07Um2GY5.jpg",
      //     headingtwo:"History of Marina Beach",
      //     textthree:"Before the construction of Madras Harbour, this beach was considered as a strip of mud only. During that time, the governor of Madras Mountstuart Elphinstone Grant Duff was captivated by the scenic beauty of this place and the decided to build a promenade alongside the beach. After everything was done, the beach was given the name of Madras Marina.  Marina Beach is in Chennai along the Bay of Bengal. It has a long stretch of approximately 12 kilometres that runs from Fort St. George in the north to the Foreshore Estate in the south. It is one of the most prominent landmarks of Chennai that draws as many as 30,000 tourists each day.",
      //     textfour:"Marina Beach is the most exquisite landmark of Chennai that draws tourists from across the country. The gorgeous beach, with its pristine waters and glistening sands, is the longest natural urban beach in India. Marina Beach, Chennai is also the world’s second longest urban beach, extending nearly 12 kilometres from Beasant Nagar in the south to Fort St. George in the north.",
      //     textfive:"Named after the Italian word ‘Marina’, the beach was renovated by Governor Mountstuart Elphinstone Grant Duff during the 1880s. Ever since, the beach has been a popular spot in Chennai. There are several magnificent monuments and buildings situated across the promenade that was built during the beginning of the 19th century. A stroll along the promenade will be an exciting one for all history enthusiasts as they get to spot the statues commemorating the lives of many famous Indian dignitaries.",
      //     imagethree:"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101867-Marina-Beach.jpg",
      //     textsix:"Marina Beach in Chennai is India’s longest beach and world’s second longest beach. During the Pongal festival that comes in January, Marina beach attracts an estimated 150,000 people for the  festivities. The Marina Beach Chennai hosts several prominent national and cultural events such as parades on Republic Day andIndependence Day.",
      //     textseven:"The composition of meiosis at this beach in Chennai consists of polychaetes, harpacticoids, nematodes  turbellarians, and oligochaetes. The beach is known for its food stalls that serve popular & scrumptious street food of Chennai.  People can also enjoy activities like pony rides, giant wheel, and merry-go-round rides at Marina Beach.",
      //     imagefour:"https://www.deccanherald.com/sites/dh/files/articleimages/2021/01/28/380562-01-02-943821-1611785546.jpg",
      //     hotellinkone:"https://www.theparkhotels.com/images/site-specific/chennai/gallery/theparkchennai.jpg",
      //     hotellinktwo:"https://www.tajhotels.com/content/dam/luxury/hotels/taj-coromandel/images/gallery/Coromandel-exterior---high-res-1900x1180-pixels-final.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      //     hotelonename:"The Park",
      //     hoteltwoname:"Taj Coromandal",
      //     hotelonelink:"/home/Hotels/thanjaihotelone",
          
      //     },
      //     {
      //       heading:"Queen of Hill Stations",
      //       name:"Ooty",
      //       textone:"Ooty is a town and a municipality in the Nilgiris district of the South Indian state of Tamil Nadu. It is located 86 km (53 mi) north west of Coimbatore ,100 km (65 mi) north west of Tirupur ,128 km (80 mi) south of Mysore and is the headquarters of the Nilgiris district. It is a popular hill station located in the Nilgiri Hills. It is popularly called the Queen of Hill Stations. It was the summer capital of the Madras Presidency The origin of the name is obscure. The first known written mention of the place is given as Wotokymund in a letter of March 1821 to the Madras Gazette from an unknown correspondent.In early times it was called Ottakal Mandu. The name probably changed under British rule from Udhagamandalam to Ootacamund, and later was shortened to Ooty.",
      //       imageone:"https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
      //       texttwo:" Originally occupied by the Badaga and Toda people, the area came under the rule of the East India Company athe end of the 18th century. The economy is based on tourism and agriculture, along with the manufacture o  medicines and photographic film. The town is connected by the Nilgiri ghat roads and Nilgiri Mountain Railway. Its natural environment attracts tourists and it is a popular summer destination. In 2011, the town had a population of 88,430.",
      //       imagetwo:"https://lp-cms-production.imgix.net/2019-06/325f008365058deb5ca88390a8d5d21c-ooty-udhagamandalam.jpg",
      //       headingtwo:"History of Ooty",
      //       textthree:" The Toda in Nilgiris are first referenced in a record belonging to Hoysala king Vishnuvardhana and his general Punisa, dated 1117 CE. The Toda people were known for raising water buffalo. The people known for farming activities. Nilgiris was ruled by various dynasties like Satavahanas, Gangas, Kadambas, Rashtrakutas, Hoysalas, the Vijayanagara empire and the Rajas of Ummattur (on behalf of Wodeyar of Mysuru).Tipu Sultan captured Nilgiris in the eighteenth century and extended the border by constructing a hideout cave-like structure. The Nilgiris came into possession of British East India Company as part of the ceded lands, held by Tipu Sultan, by the treaty of Srirangapatnam in 1799",
      //       textfour:"In 1818, J. C. Whish and N. W. Kindersley, assistants to John Sullivan, then Collector of Coimbatore, visitedOoty and submitted a report to him. Sullivan camped at Dimbhatti, north of Kotagiri in January 1819 and was enthralled by the beauty of the place. He wrote to Thomas Munro, ... it resembles Switzerland, more tha any country of Europe... the hills beautifully wooded and fine strong spring with running water in everyvalley.",
      //       textfive:"The Badagas of Dimbhatti ceded that part of the town to Sullivan and in May 1819, he began to build his  bungalow at Dimbhatti. He also started work on a road from Sirumugai to Dimbhatti that year. The road wa  completed in May 1823, and extended up to Coonoor by 1830–32",
      //       imagethree:"https://pandareviewz.com/wp-content/uploads/2018/07/ooty-2298522_640.jpg",
      //       textsix:"Aranmore Palace in Ooty, served as the summer capital of the Madras Presidency; it was visited by British officials during the colonial days as a popular summer resort. Soldiers were sent to nearby Wellington to recuperate. Wellington is the home of the Madras Regiment of the Indian Army.[19][20] After Independence it developed into a popular hill resort",
      //       textseven:"The most awesome part of Ooty is the Botanical Garden. Thousands of flowers arranged in a mind blowing manner are the main reason so many tourists to the Botanical garden. The best thing about Ooty is that we will happy in the company of nature. Not only nature, we can also ride horses in Ooty.",
      //       imagefour:"https://im.hunt.in/cg/ooty/City-Guide/ooty.jpg",
      //       hotellinkone:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS908KbHCQINxofyH2vwJFn8bXFsUlxxkrrwQ&usqp=CAU",
      //       hotellinktwo:"https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/15/41/1541223_v3.jpeg",
      //       hotelonename:"KS Hotel",
      //       hoteltwoname:"Sterling Ooty Fern Hill",
      //       hotelonelink:"/home/Hotels/thanjaihotelone",
            
      //       },
      //       {
      //         heading:"The Land's End",
      //         name:"Kanyakumari",
      //         textone:"Kanniyakumari district in the state of Tamil Nadu, India. It is the southern tip of the Indian subcontinent and the southernmost city in mainland India, and thus referred to as  The Land's End. The city is situated 90 kilometres (56 mi) south of Thiruvananthapuram city, and about 20kilometres (12 mi) south of Nagercoil, the headquarters of Kanniyakumari district.Kanniyakumari is a popular tourist destination and pilgrimage centre in India. Notable tourist spots include its unique sunrise and sunset points, the 41-metre (133 ft) Thiruvalluvar Statue, and Vivekananda RockMemorial off the coast",
      //         imageone:"https://t3.ftcdn.net/jpg/04/37/06/66/360_F_437066688_Z1MEmXciB8h9pxatdeszDkFNAJ7mzRWP.jpg", 
      //         texttwo:" According to a Hindu legend, Kanya Devi, an avatar of Parvati, was to marry Shiva, who failed to show up on his wedding day. Rice and other grains meant for the wedding feast remained uncooked and unused.[9] The uncooked grains turned into stones as time went by. Some believe that the small stones on the shore today, which look like rice, are indeed grains from the wedding that was never solemnised. Kanya Devi is now considered a virgin goddess who blesses pilgrims and tourists who flock to the town. Her temple in  Kanniyakumari is a Shakti Peetha: a holy shrine in the Shaktism tradition of Hinduism.",
      //         imagetwo:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/view-from-kanyakumari-beach-1280x720.webp",
      //         headingtwo:"History of Kanniyakumari",
      //         textthree:"The Thiruvalluvar Statue is a 7,000-ton stone statue of poet and philosopher Valluvar. It has a height of 29 metres (95 feet) and stands upon an 11.5-metre (38 ft) rock that represents the 38 chapters of virtue in the   Thirukkural. The statue standing on the rock represents wealth and pleasures, signifying that wealth and   love be earned and enjoyed on the foundation of solid virtue. The combined height of the statue and pedestal   is 133 ft (40.5 m), denoting the 133 chapters in the Thirukkural.",
      //         textfour:"The statue is reminiscent of a dancing pose of Nataraja. It was sculpted by the Indian sculptor V. Ganapati Sthapati, who also created the Iraivan Temple, and its opening ceremony was on 1 January 2000. The monument was hit by the Indian Ocean tsunami on 26 December 2004, but stood unaffected. The statue is designed to  survive earthquakes of high magnitude",
      //         textfive:"The Vivekananda Rock Memorial is a popular tourist monument in Vavathurai, Kanniyakumari, India. The memorial stands on one of two rocks in the Laccadive Sea, located about 500 metres (1,600 ft) east of the mainland of Vavathurai. It was built in 1970 in honour of Swami Vivekananda who is said to have attained enlightenment   on the rock.[citation needed] According to local legends, it was on this rock that Goddess Kumari performed   austerity. A meditation hall (Dhyana Mandapam) is also attached to the memorial for visitors to meditate.  The design of the mandapa incorporates different styles of temple architecture from all over India. It  houses a statue of Vivekananda. The memorial consists of two main structures: the Vivekananda Mandapam and  the Shripada Mandapam.",
      //         imagethree:"https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/popular-destinations-1655192642_47f85859447ea395926a.webp",
      //         textsix:"The Gandhi Memorial Mandapam has been built on the spot where the urn containing the Mahatma's ashes was kept for public viewing before immersion. Resembling central Indian Hindu temples in form, the memorial was   designed such that on Gandhi's birthday, 2 October, the first rays of the sun fall on the exact place where   his ashes were kept",
      //         textseven:"According to another Hindu legend, Hanuman dropped a piece of earth near Kanniyakumari as he was carrying   mountain with his life-saving herb, Mrita Sanjivani, from the Himalayas to Lanka (Sri Lanka) during the  Ramayana War. The fallen earth formed an area called Marunthuvazh Malai, literally hills where medicine   lives. This legend explains the abundance of unique native medicinal plants in the area.Marunthuvazh Malai is located near Kottaram, about 7 km (4 mi) from Kanniyakumari town on the  Kanniyakumari–Nagercoil highway. The sage Agasthya, who was an expert in medicinal herbs, is believed to  have lived around this site in ancient days.[by whom?] There is an ashram on the middle of the hillside;  tourists trek up to visit the ashram and to glimpse the sea near Kanniyakumari town, a few kilometres away.",
      //         imagefour:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/56/a7/63/suchindram-temple.jpg?w=500&h=400&s=1",
      //         hotellinkone:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/89446387.jpg?k=89c9e9b33371eac9341581cfe1b7cbd3e4d3447cad589a08ddd10f6667f00657&o=&hp=1",
      //         hotellinktwo:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/64059676.jpg?k=12e4b73cee6862fc3b5a15d95cbc325d349ee6255f489ec7d4f261af4f3a6d10&o=&hp=1",
      //         hotelonename:"Hotel Ocean Heritage",
      //         hoteltwoname:"Sparsa Resort",
      //         hotelonelink:"/home/Hotels/thanjaihotelone",
              
      //         },
      //         {
      //           heading:"Kerala",
      //           name:"Athirapally",
      //           textone:"Athirapilly Falls, is situated in Athirapilly Panchayat in Chalakudy Taluk of Thrissur District in Kerala, India on the Chalakudy River, which originates from the upper reaches of the Western Ghats at the entrance to the Sholayar ranges. It is the largest waterfall in Kerala, which stands tall at 81.5 feet. Just a short drive from Athirapilly to the Vazhachal falls, which is close to dense green forests that are home to many endangered and endemic species of flora and fauna.",
      //           imageone:"https://irisholidays.com/keralatourism/wp-content/uploads/2020/02/athirappilly-hill-waterfalls.jpg",
      //           texttwo:" The 145 kilometres (90 mi) long Chalakudy River, originates in the Anaimalai mountains of the Western Ghats and flows through the Vazhachal Forest toward the Arabian Sea. The river starts off smooth but becomes more turbulent as it nears Athirapilly. At Athirappilly Falls, the water surges around big rocks and cascades down in three separate plumes. Below the falls, the river remains turbulent for about 1 kilometre (0.62 mi) until it reaches Kannamkuzhi, from where it calms and flows smooth until reaching the dam at Thumpoormuzhi.",
      //           imagetwo:"https://media-cdn.tripadvisor.com/media/photo-s/10/f1/4c/40/best-place-for-nature.jpg",
      //           headingtwo:"History of Athirapilly Fall",
      //           textthree:"Forest wildlife in the area includes the Indian elephant, Bengal tiger, Indian leopard, gaur, sambar, and lion-tailed macaque. The unique 180 metres (590 ft) elevation riparian forest in the Athirappilly-Vazhachal area is the only location where all four South Indian species of hornbills — the great hornbill (the state bird of Kerala), Malabar pied hornbill, Malabar grey hornbill, and the Indian grey hornbill are found living together.                ",
      //           textfour:" Plantations in the area contain teak, bamboo, and eucalyptus.</p><p> Environmentalists claim that Athirappilly is a one-of its-kind riparian ecosystem in Kerala. V.S. Vijayan, Chairman of the Kerala State Biodiversity Board and former Director of the Salim Ali Centre for Ornithology and Natural History (SACON), Coimbatore, has been quoted in Down to Earth magazine as affirming that the Vazhachal forest division is the second most biodiverse area in the State. The International Bird Association has declared it an ‘Important Bird Area' and the Asian Nature Conservation Foundation has recommended that the area should be declared a sanctuary or a national park, he points out.",
      //           textfive:"The Wildlife Trust of India says it represents one of India's best elephant conservation efforts. Any disruption to this fragile ecosystem will spell disaster, says Vijayan.  The river provides habitat for 85 species of fresh water fishes. Among these, 35 are endemic species.",              
      //           imagethree:"https://www.keralatourism.org/images/destination/mobile/athirappalli_and_vazhachal_waterfalls_thrissur20131031102422_79_1.jpg",
      //           textsix:"Athirapally Waterfalls never dry out and can be visited anytime during the year. However, though the waterfall appears in its full glory during monsoons, heavy rains cause inconvenience. So, the best time to visit is from September to January",
      //           textseven:"Nicknamed as The Niagara of India, Athirapally waterfalls is the largest waterfall in Kerala.Athirappilly Falls, is situated in Athirappilly Panchayat, Chalakudy Taluk, Thrissur District of Kerala, India on the Chalakudy River, which originates from the upper reaches of the Western Ghats at the entrance to the Sholayar ranges.It is the largest waterfall in Kerala, which stands tall at 80 feet",
      //           imagefour:"https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Thumboormuzhi-Dam0310Kerala.jpg",
      //           hotellinkone:"https://www.ktdc.com/images/premium/samudra-lg.jpg",
      //           hotellinktwo:"https://townbridgehotels.com/assets/images/about.jpg",
      //           hotelonename:"KTDC Hotel",
      //           hoteltwoname:"Townbridge Hotels & Suites PVT Ltd Hotel",
      //           hotelonelink:"/home/Hotels/thanjaihotelone",
                
      //           }


      
      // ]
    
      this.getDescription();
      // let filter=detailedplaceonfo.filter((obj)=>{return obj.name==this.placename.getplacename()})
      // this.filteredvalues=filter;
      // console.log(this.filteredvalues);
     // console.log (this.descriptions.filter((obj)=>{return obj.name==this.placename.getplacename()}));
    }
    getDescription()
    {
        this.http.get("https://localhost:7000/api/InformationAboutPlaces")
        .subscribe((resultData:any)=>
        {
            this.descriptions=resultData;
            console.log(this.descriptions);
            this.filteredvalues=this.descriptions.filter((obj)=>{return obj.name==this.placename.getplacename()});
            console.log(this.filteredvalues);
        });

        this.http.get("https://localhost:7000/api/Hotel")
        .subscribe((resultData:any)=>
        {
          this.listOfHotels=resultData;
          this.filteredhotels=this.listOfHotels.filter((obj)=>{return obj.place==this.placename.getplacename()});
        });
        
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
        else if (hotelname == "The Residency Towers") {
          this.hotelname = "The Residency Towers";
        }
        else if (hotelname === "The Park") {
          this.hotelname = "The Park";
        }
        else if (hotelname === "Taj Coromandal") {
          this.hotelname = "Taj Coromandal";
        }
        else if (hotelname == "KS Hotel") {
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
        else if (hotelname == "Hotel Ocean Heritage") {
          this.hotelname = "Hotel Ocean Heritage";
        }
        else if (hotelname === "Sparsa Resort") {
          this.hotelname = "Sparsa Resort";
        }
        else{
        return;
        }
        
        this.nameofthehotel.setplacename(this.hotelname);
        this.hotelname='';
  }
}
