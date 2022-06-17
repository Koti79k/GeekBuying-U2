/* Images movement*/
var slide_start=1;
var maxslider=6;
//var output=document.getElementById("image")

function leftslid(){
    if(slide_start>1 ){
    slide_start-=1;
    document.getElementById("image").src=""+slide_start+".jpg";
    //output.src=slide_start+".jpg"
}
}
function rightslid(){
    if(slide_start<6){
    slide_start+=1;
    document.getElementById("image").src=""+slide_start+".jpg";
}
}

/* second row formation*/ 
var row2 =[
    {
    img:"https://img.gkbcdn.com/s3/bn/2205/488x2743-628f62882b40c91f8cd36998.jpg",
    name:"Smart Home",
    para:"Smart Cleaning robots and vacums,keep floors constantly tidy with very little effort on your part.",
    },

    {
    img:"https://img.gkbcdn.com/s3/bn/2205/488x274-628f63522b40c91f8cd3699a.jpg",
    name:"E-transport",
    para:"My ride. My speed. My way. I am keeping with myself.",
    },

    {
    img:"https://img.gkbcdn.com/s3/bn/2205/3d488x274-62958bbe2b40c9241c538d77.jpg",
    name:"3D Printers",
    para:"3D Printers allow you to bring digitally modeled designs to life by using highly detailed filament printing."
    },

    
]

display2(row2)

function display2(data){

  data.forEach(function (ele){
     var div = document.createElement("div")

     var img = document.createElement("img")
     img.setAttribute("src",ele.img)
     var h3 = document.createElement("h3")
     h3.innerText=ele.name
     var para=document.createElement("p")
      para.innerText=ele.para
div.append(img,h3,para)
document.querySelector("#row2").append(div)
console.log(div)
  })
}
      /* third row formation*/
var  row3 = [
    {
        image: "https://img.gkbcdn.com/p/2022-06-07/C127-RC-Helicopter-2-4G-4CH-6-Axis-Gyro-720P-Camera-with-Remote-Contro-501582-0._w280_p1_.jpg",
        para:"C127 RC Helicopter 2.4G 4CH 6-Axis Gyro 720P Camera Optical Flow",
        price: 9662.41,
        
    },
    {
        image: "https://img.gkbcdn.com/p/2022-05-27/xiaomi-mi-band-7-black-17e243-1653647543366._w280_p1_.jpg" ,
        para:"XIAOMI Mi Brand 7 Smart Bracelet Smart Wristband Watch AMOLED",
        price:4589.22 ,
       
    },
    {
        image: "https://img.gkbcdn.com/p/2022-05-27/MEROCA-WR15-WR25-Cushion-mounting-bracket-501368-0._w280_p1_.jpg" ,
        para:"cushion Mounting Bracket For MEROCA WR15 WR25 Smart Bike Tail", 
        price: 240.78 ,
        
    },
    {
        image: "https://img.gkbcdn.com/p/2022-05-30/3-5-Inch-IPS-TYPE-C-Secondary-Screen-CPU-GPU-RAM-HDD-Monitoring-501430-0._w280_p1_.jpg" ,
        para:"3.5 Inch IPS TYPE-C Secondary Screen CPU GPU RAM HDD",
        price: 2978.68,
       
    },
    
];

display3(row3)

function display3(data)
{
  data.forEach(function (ele){
     var div = document.createElement("div")

     var img = document.createElement("img")
     img.setAttribute("src",ele.image)

     var para=document.createElement("p")
     para.innerText=ele.para

     var h4 = document.createElement("h4")
     h4.innerText=ele.price
     
   
div.append(img,para,h4)
document.querySelector("#row3").append(div)
console.log(div)
  })
}

 
    var  row5 = [
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-28/Zeblaze-Stratos-2-Smartwatch-1-3---AMOLED-Display-Blue-500033-0._w280_p1_.jpg",
            price: "₹38475.04",
            para : "Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24" ,
            discount: "$24% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-18/KUMI-KU5-Smartwatch-1-22---TFT-Screen-Black-499724-0._w280_p1_.jpg" ,
           
            price: "₹39260.26" ,
            para : "KUMI KU5 Smartwatch 1.22'' TFT Screen Real-time Health" ,
           discount: "$26% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-25/A-pair-of-LED-Luminous-Chopsticks-499968-0._w280_p1_.jpg" ,
            price:" ₹24341.07" ,
            para : "A pair of LED Luminous Chopsticks Creative Tableware" ,
            discount: "$21% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-21/ALLDOCUBE-iWork-GT-2-in-1-Tablet-Windows-11-i5-1135G7-CPU-499845-0._w280_p1_.jpg" ,
            price: "₹83814.49",
            para : "ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7",
            discount: "$9% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-04-13/Magene-HRM60-Heart-Rate-Monitor-499514-0._w280_p1_.jpg" ,
            price: "₹83814.49",
            para : "Magene HRM60 Heart Rate Monitor IML Colorful Shell ANT+/",
            discount: "9% Off",
        },
    ];
    
    display5(row5)
    
    function display5(data)
    {
      data.forEach(function (ele){
         var div = document.createElement("div")
    
         var img = document.createElement("img")
         img.setAttribute("src",ele.image_url)
    
         var h4 = document.createElement("h4")
         h4.innerText=ele.price

         var  para = document.createElement("p")
         para.innerText = ele.para

    div.append(img,para,h4)
    document.querySelector("#row5").append(div)
    // console.log(div)
      })
    }

    var  row6 = [
        {
            image_url: "https://img.gkbcdn.com/p/2019-03-22/tronsmart-glary-virtual-7-1-gaming-headset-1571985014193._w280_p1_.jpg",
            price: "₹2357.90",
            para : "Tronsmart Glary Gaming Headset 7.1 Virtual Surround" ,
            discount: "$24% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_p1_.jpg" ,
           
            price: "₹17296.27" ,
            para : "JJRC X12 AURORA 4K 5G WIFI 3KM FPV GPS Foldable" ,
           discount: "$26% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2021-12-09/A9-1080P-Mini-Wireless-WIFI-IP-Camera-480325-0._w280_p1_.jpg" ,
            price:"₹1178.56" ,
            para : "A9 1080P HD Mini Wireless WIFI IP Camera DVR Night" ,
            discount: "$21% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-10-28/enchen-blackstone-3d-smart-electric-shaver-black-1574132742777._w280_p1_.jpg" ,
            price: "₹1493.05",
            para : "Xiaomi Enchen BlackStone 3D Smart Floating Blade Head",
            discount: "$9% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg" ,
            price: "₹2593.77",
            para : "Razer DeathAdder Essential Optical Professional Grade",
            discount: "9% Off",
        },
    ];
    
    display6(row6)
    
    function display6(data)
    {
      data.forEach(function (ele){
         var div = document.createElement("div")
    
         var img = document.createElement("img")
         img.setAttribute("src",ele.image_url)
    
         var h4 = document.createElement("h4")
         h4.innerText=ele.price

         var  para = document.createElement("p")
         para.innerText = ele.para

    div.append(img,para,h4)
    document.querySelector("#row6").append(div)
    
    // console.log(div)
      })
    }

    
    /*row 7 created for js Images movement*/
var sliderstart=1;
var maxsliders=25;
//var output=document.getElementById("image")

function leftslide(){
    if(sliderstart>1 ){
   
    document.getElementById("image1").src="/Images 1/"+sliderstart+".jpg";   
    //output.src=sliderstart+".jpg"
    sliderstart-=1;
}
}
function rightslider(){
    
    if(sliderstart<26){
    document.getElementById("image1").src="/Images 1/"+sliderstart+".jpg";    
    sliderstart+=1;
    }
   

}

document.querySelector("#new").addEventListener("click",myFunction)
function myFunction(){
    window.location.href= "new.html"
}
document.querySelector("#ship").addEventListener("click",myFu)
function myFu(){
    window.location.href="shipping.html"
}
