

const getData = async ( url )=>{
    try{
        let response = await fetch( url );
        // console.log( response );
        let data = await response.json();
        data = data.Electronics ;
        console.log("data", data);
        
        // let htol=document.getElementById("")
        return data;
        

    }catch(err){
       console.log("err", err);
    }
}


const appendData = (data, main)=>{
    main.innerHTML = null ;
    data.forEach((ele)=>{
        let div = document.createElement("div");
        div.addEventListener("click",function(){
            localStorage.setItem("item",JSON.stringify(ele));
            window.location.href = "showdata.html"
        })

        let image1 = document.createElement("img");
        image1.src = ele.image;
        image1.style.width= '100%' ;

        let detail1 = document.createElement("p");
        detail1.innerText = ele.detail;

        let price = document.createElement("h4");
        price.innerText ="₹"+ele.original;
        price.setAttribute("class","pr")
        
        
        let beforePrice=document.createElement("p");
        beforePrice.innerText="₹"+ele.before;
        beforePrice.setAttribute("class","linetrough");
        console.log("ele.before",ele.before);

        let discon=document.createElement("p");
        discon.innerText="₹"+ele.discount;
        discon.setAttribute("class","discounted");

        let starrr=document.createElement("p");
        starrr.innerText=ele.star;
        starrr.setAttribute("class", "str");



        div.append(image1,detail1,price,beforePrice,discon,starrr);

        main.append(div);
    })
}


export  {getData, appendData};

