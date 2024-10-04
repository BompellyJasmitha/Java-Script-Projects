let navEle = document.getElementById("navDiv")
document.body.before(navEle)
navEle.style.height="100px"
navEle.style.width="100%"
navEle.style.background=" rgb(214, 157, 83)"

// store--Name--Lable

let navEleTitle=document.createElement("h1")
navEle.appendChild(navEleTitle)
navEleTitle.innerHTML="SOMALIYA"
navEleTitle.style.cssText=`color:black;backgroundcolor="red";padding:15px 0px 0px 100px;width:300px`;


let navEleSUbTitle=document.createElement("h3")
navEle.appendChild(navEleSUbTitle)
navEleSUbTitle.innerHTML="F a s h i o n____S t o r e"
navEleSUbTitle.style.cssText=`color:black; padding:10px 100px;width:400px `
navEleSUbTitle.style.fontSize="15px"

// Home--------------------------->

let homeTitle=document.createElement("h3")
navEle.appendChild(homeTitle)
homeTitle.innerHTML="Home"
homeTitle.style.cssText=`color:black; position:relative; left:500px; bottom:50px;font-Size:25px;width:fit-content;color`

let CategoriesTitle=document.createElement("h3")
navEle.appendChild(CategoriesTitle)
CategoriesTitle.innerHTML="Categories"
CategoriesTitle.style.cssText=`color:black; position:relative; left:650px; bottom:75px;font-Size:22px;width:fit-content;color`

let jewelleryTitle=document.createElement("h3")
navEle.appendChild(jewelleryTitle)
jewelleryTitle.innerHTML="Jewellery"
jewelleryTitle.style.cssText=`color:black; position:relative; left:850px; bottom:100px;font-Size:22px;width:fit-content;color`

let electronicsTitle=document.createElement("h3")
navEle.appendChild(electronicsTitle)
electronicsTitle.innerHTML="Electronics"
electronicsTitle.style.cssText=`color:black; position:relative; left:1050px; bottom:125px;font-Size:22px;width:fit-content;color`


let helpTitle=document.createElement("h3")
navEle.appendChild(helpTitle)
helpTitle.innerHTML="Help"
helpTitle.style.cssText=`color:black; position:relative; left:1300px; bottom:150px;font-Size:22px;width:fit-content;color`


//      //        // FIRST DIV

let mainDiv=document.getElementById("homeDiv")
document.body.appendChild(mainDiv)
mainDiv.style.cssText=`background: rgba(25, 28, 35, 0.915);width:100%;height:70vh `


// first -- div -- title

let mainDivTitle = document.createElement("h1")
mainDiv.appendChild(mainDivTitle)
mainDivTitle.innerHTML="Apparel Ecommerce Store"
mainDivTitle.style.cssText=`position:relative;left:50px;top:100px;color:rgb(214, 157, 83);width:fit-content`

let mainDivPara = document.createElement("p")
mainDiv.appendChild(mainDivPara)
mainDivPara.innerHTML="Lorem iit amet consectetur adipisicing elit. Tempora doloribus aliquid perspiciatis optio  id eveniet nam..."
mainDivPara.style.cssText=`position:relative;left:50px;top:120px;color:rgb(214, 157, 83); width:600px;`
mainDivPara.setAttribute("id","mainDivParaId")

// more content para----------------->
let x=document.body.getElementsByTagName("p");
    let count=0

    function moreinfo(){
    if(count==0){
    x[0].innerHTML="psum dolor, sit amet consectetur adipisicing elit.Tempora doloribus aliqui adipisci id eveniet nam Lorem ipsum dolor, sit amet consectetur onsectetur adipisicing elit.Tempora doloribus aliquid perspiciatis optio aliquam unde est adipisci idTempora doloribus aliquid perspiciatis optio aliquam unde est adipisci id eveniet nam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora eveniet nam Lorem ipsum dolor.";
    count=count+1;
    
    backImg.style.cssText=`width:750px;height:400px;position:relative;left:400px;bottom:90px;border-radius:10%;border:10px solid rgb(214, 157, 83) `
    }
    else{
        x[0].innerHTML="Lorem iit amet consectetur adipisicing elit. Tempora doloribus aliquid perspiciatis optio  id eveniet nam...";

        backImg.style.cssText=`width:800px;height:450px;position:relative;left:350px;bottom:60px;border:1px solid rgb(214, 157, 83) `;
        count=0;    
    }
    }

let mainDivbutton = document.getElementById("homeDivButton")
mainDiv.appendChild(mainDivbutton)
mainDivbutton.innerHTML="Explore More ⇅"
mainDivbutton.style.cssText=`color:black;background:rgb(214, 157, 83);font-weight:bold ;position:relative;left:50px;bottom:180px;width:300px; padding:10px 25px;font-size:20px;font-Weight:200px;fontWeight:bolder`;

// mainDivImage------------------>>>>>>>>
let backImg = document.getElementById("mainDivImg")
mainDiv.appendChild(backImg)
backImg.style.cssText=`width:800px;height:450px;position:relative;left:350px;bottom:60px;border:1px solid rgb(214, 157, 83),object-fit:cover `;

//      //        //    PRODUCTS DIV

let productDivJs =document.getElementById("productsDiv")
document.body.after(productDivJs)
productDivJs.style.cssText=`background:rgb(255, 222, 179);height:400vh;width:100%; `;

// product cards:

let url=fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(y=>y.map(x=>{let divs=document.createElement("div");
                                                                                            productDivJs.appendChild(divs);
                                                                                            divs.setAttribute("class","secondDiv");
                                                                                            divs.style.cssText=`width:300px;height:450px;background:white;border:1px solid rgba(25, 28, 35, 0.915);box-shadow:5px 10px 15px black;margin:70px 20px 20px 25px;border-radius:40px ;padding-bottom:100px ; float:left`;

                                                                                        let imgs=document.createElement("img");
                                                                                            divs.prepend(imgs);
                                                                                            imgs.setAttribute("class","secondDivImg")
                                                                                            imgs.setAttribute("src",x.image)
                                                                                            imgs.style.cssText=`width:297px;height:370px;border-radius:40px 40px 0px 0px;padding-bottom:100px`;
                                                                                        
                                                                                        let pricebutton=document.createElement("button");
                                                                                            divs.appendChild(pricebutton);
                                                                                            divs.setAttribute("id","buttonProd");
                                                                                            
                                                                                            pricebutton.textContent=`Price : ₹ ${x.price}`;
                                                                                            pricebutton.style.cssText=`color:black;font-weight:bold ; padding:5px 20px; width:fit-content;position:relative;left:80px;top:30px;background:rgb(214, 157, 83) ;border-radius:10px`;

                                                                                        let title=document.createElement("h3");
                                                                                            divs.appendChild(title);
                                                                                            title.innerHTML=` ${x.title}`;
                                                                                            title.style.cssText=`color:black;text-align: center;font-weight:bold ; width:260px; font-size:16px; position:relative; left:10px;bottom:100px`;
                                                                                        
                                                                                        }))
//      //      //      footer--------------------->>>>>>>>

let footerDiv = document.getElementById("footer");
document.body.after(footerDiv);
footerDiv.style.height="100px";
footerDiv.style.width="100%";
footerDiv.style.background=" rgb(214, 157, 83)";