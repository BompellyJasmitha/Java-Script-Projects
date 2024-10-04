//      //        // FIRST DIV

let mainDiv=document.getElementById("homeDiv")
document.body.appendChild(mainDiv)
mainDiv.style.cssText=`width:100%;height:100vh; background:url("https://cdn.pixabay.com/animation/2023/01/01/10/15/10-15-49-381_512.gif") center/100% 100vh no-repeat fixed `;


// // first -- div -- title

let mainDivTitle = document.createElement("h1")
mainDiv.appendChild(mainDivTitle)
mainDivTitle.innerHTML="Ecommerce Store"
mainDivTitle.style.cssText=`position:relative;left:570px;top:250px;color:#fff;width:fit-content;font-size:40px`

let mainDivPara = document.createElement("p")
mainDiv.appendChild(mainDivPara)
mainDivPara.innerHTML="Lorem iit amet consectetur adipisicing elit. Tempora doloribus aliquid perspiciatis optio  id eveniet nam..."
mainDivPara.style.cssText=`position:relative;left:350px;top:280px;color:#fff; width:800px;font-size:20px;font-weight: bold;;`
mainDivPara.setAttribute("id","mainDivParaId")

// // more content para----------------->

let x=document.body.getElementsByTagName("p");
    let count=0

    function moreinfo(){
    if(count==0){
    x[0].innerHTML="psum dolor, sit amet consectetur adipisicing elit.Tempora doloribus aliqui adipisci id eveniet nam Lorem ipsum dolor, sit amet consectetur onsectetur adipisicing elit.Tempora doloribus aliquid perspiciatis optio aliquam unde est adipisci idTempora doloribus aliquid perspiciatis optio aliquam unde est adipisci id eveniet nam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora eveniet nam Lorem ipsum dolor.";
    count=count+1;
    
    }
    else{
        x[0].innerHTML="Lorem iit amet consectetur adipisicing elit. Tempora doloribus aliquid perspiciatis optio  id eveniet nam...";

        count=0;    
    }
    }

let mainDivbutton = document.getElementById("homeDivButton")
mainDiv.appendChild(mainDivbutton)
mainDivbutton.innerHTML="Explore More ⇅"
mainDivbutton.style.cssText=`color:rgb(147, 59, 171);background:#fff;font-weight:bold ;position:relative;left:570px;top:300px;width:300px;border-radius:20px;padding:10px 25px;font-size:20px;font-Weight:200px;fontWeight:bolder;border:2px solid rgb(207, 0, 207)`;

// // Electronics div ----------------->

let elediv=document.getElementById("electronicDiv");
document.body.appendChild(elediv)
elediv.style.cssText=`width:100%;height:220vh;display:flex;flex-wrap: wrap;background:url("https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg") center/cover no-repeat fixed   `

let url=fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>x.filter(y=>y.category=="electronics").map(z=>{let divs=document.createElement("div");
                                                                                                                                     elediv.appendChild(divs);
                                                                                                                                     divs.setAttribute("class","eleDiv");
                                                                                                                                     divs.style.cssText=`background-color:purple;width:690px;height:450px;margin:30px 30px;padding:10px;border:5px solid  #4a0d5bf4;border-radius:20px ;display:flex ;flex-wrap:wrap`;
                                                                                                                            
                                                                                                                            let imgDiv=document.createElement("img");
                                                                                                                                     divs.appendChild(imgDiv);
                                                                                                                                     imgDiv.setAttribute("src",z.image);
                                                                                                                                     imgDiv.style.cssText=`width:300px;height:300px;border-radius:20px;`;

                                                                                                                            let title=document.createElement("h3");
                                                                                                                                     divs.appendChild(title);
                                                                                                                                     title.innerHTML=`${z.title}`;
                                                                                                                                     title.style.cssText=`width:320px;height:70px;margin:10px 20px;color:#fff;text-align:center;font-size:20px`;
                                                                                                                            
                                                                                                                            let des=document.createElement("p");
                                                                                                                                     divs.appendChild(des);
                                                                                                                                     des.innerHTML=`${z.description}`;
                                                                                                                                     des.style.cssText=`width:320px;margin:20px;color:#fff;font-size:14px;position:relative;left:300px;bottom:210px`;
                                                                                                                            
                                                                                                                            let priceDiv=document.createElement("div");
                                                                                                                                     divs.appendChild(priceDiv);
                                                                                                                                     priceDiv.innerText=`Price : ₹ ${z.price}/-`
                                                                                                                                     priceDiv.style.cssText=`width:190px;height:35px;background-color:violet;padding:5px 10px;color:#fff;font-size:20px;text-align:center;border-radius:20px;position:relative;right:300px;top:40px`;
                                                                                                                            
                                                                                                                            let countDiv=document.createElement("div");
                                                                                                                                     divs.appendChild(countDiv);
                                                                                                                                     countDiv.innerText=`limited stock :${z.rating.count}`
                                                                                                                                     countDiv.style.cssText=`width:150px;height:30px;background-color: rgb(139, 82, 16);color:#fff;font-size:16px;padding:5px 17px;border-radius:0px 20px 20px 0px;align-content:ceter;position:relative;bottom:300px`;
                                                                                                                            
                                                                                                                                    
                                                                                                                            let ratingDiv=document.createElement("div");
                                                                                                                                     divs.appendChild(ratingDiv);
                                                                                                                                     ratingDiv.innerText=`⭐ ${z.rating.rate}`
                                                                                                                                     ratingDiv.style.cssText=`width:100px;height:30px;background-color: green;color:#fff;font-size:16px;padding:5px 17px;border-radius:20px;align-content:ceter;position:relative;bottom:200px;left:180px`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                    
                                                                                                                            
                                                                                                                                    })  )
      
                                                                      
                                                                                                                                    
// // // women div ----------------->
let womendiv=document.getElementById("womenDiv");
document.body.appendChild(womendiv)
womendiv.style.cssText=`width:100%;height:180vh;display:flex;flex-wrap: wrap;background:url("https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg") center/cover no-repeat fixed  `


let url1=fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>x.filter(y=>y.category=="women's clothing").map(z=>{
                                                                                                                            let divs=document.createElement("div");
                                                                                                                                womendiv.appendChild(divs);
                                                                                                                                divs.setAttribute("class","woDiv");
                                                                                                                                divs.style.cssText=`background-color:purple;width:300px;height:600px;margin:10px 30px;padding:10px;border:5px solid #4a0d5bf4;border-radius:20px;overflow: hidden;`;

                                                                                                                            let imgDiv=document.createElement("img");
                                                                                                                                divs.appendChild(imgDiv);
                                                                                                                                imgDiv.setAttribute("src",z.image); 
                                                                                                                                imgDiv.setAttribute("class","woDivImg");
                                                                                                                            
                                                                                                                                
                                                                                                                            let title=document.createElement("h3");
                                                                                                                                divs.appendChild(title);
                                                                                                                                title.innerHTML=`${z.title}`;
                                                                                                                                title.style.cssText=`width:270px;height:100px;color:#fff;text-align:center;margin-bottom:px;font-size:18px;`;

                                                                                                                            let des=document.createElement("p");
                                                                                                                                divs.appendChild(des);
                                                                                                                                des.innerHTML=`${z.description}`;
                                                                                                                                des.style.cssText=`width:280px;color:#fff;font-size:10px;position:relative;bottom:50px`;

                                                                                                                            let countDiv=document.createElement("div");
                                                                                                                                divs.appendChild(countDiv);
                                                                                                                                countDiv.innerText=`limited stock :${z.rating.count}`
                                                                                                                                countDiv.style.cssText=`width:150px;height:30px;background-color: rgb(139, 82, 16);color:#fff;font-size:14px;padding:5px 17px;border-radius:20px 20px ;align-content:ceter;position:relative;bottom:40px;right:10px`;

                                                                                                                            let ratingDiv=document.createElement("div");
                                                                                                                                divs.appendChild(ratingDiv);
                                                                                                                                ratingDiv.innerText=`⭐ ${z.rating.rate}`
                                                                                                                                ratingDiv.style.cssText=`width:100px;height:30px;background-color: green;color:#fff;font-size:16px;padding:5px 17px;border-radius:20px;align-content:ceter;position:relative;bottom:70px;left:160px`; 
                                                                                                                                
                                                                                                                                let priceDiv=document.createElement("div");
                                                                                                                                divs.appendChild(priceDiv);
                                                                                                                                priceDiv.innerText=`Price : ₹ ${z.price}/-`
                                                                                                                                priceDiv.style.cssText=`width:190px;height:35px;background-color:violet;padding:5px 10px;color:#fff;font-size:20px;text-align:center;border-radius:20px;position:relative;left:35px;bottom:40px`;

                                                                                                                               })  )
// // //jewelery div ----------------->

let jewdiv=document.getElementById("jeweleryDiv");
document.body.appendChild(jewdiv)
jewdiv.style.cssText=`width:100%;height:100vh;display:flex;flex-wrap: wrap;background: radial-gradient(rgba(0, 0, 0, 0.53),rgba(0, 0, 0, 0.661)),url("https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg") center/cover no-repeat fixed  `

let url2=fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>x.filter(y=>y.category=="jewelery").map(z=>{ let divs=document.createElement("div");
                                                                                                                           jewdiv.appendChild(divs);
                                                                                                                           divs.setAttribute("class","jewDiv");
                                                                                                                           divs.style.cssText=`background-color:purple;width:300px;margin:90px 30px;border:5px solid #4a0d5bf4;border-radius:20px;overflow: hidden;`;

                                                                                                                            let imgDiv=document.createElement("img");
                                                                                                                                divs.appendChild(imgDiv);
                                                                                                                                imgDiv.setAttribute("src",z.image); 
                                                                                                                                imgDiv.style.cssText=`width:300px;height:300px;border-radius:20px;`;
                                                                                                                                imgDiv.setAttribute("class","jewDivImg");
                                                                                                                            
                                                                                                                                
                                                                                                                            let title=document.createElement("h3");
                                                                                                                                divs.appendChild(title);
                                                                                                                                title.innerHTML=`${z.title}`;
                                                                                                                                title.style.cssText=`width:270px;height:100px;color:#fff;text-align:center;margin-bottom:20px;font-size:18px;`;
                                                                                                                            
                                                                                                                            let des=document.createElement("p");
                                                                                                                                divs.appendChild(des);
                                                                                                                                des.innerHTML=`${z.description}`;
                                                                                                                                des.style.cssText=`width:280px;color:#fff;font-size:10px;position:relative;bottom:50px`;
                                                                                                                            
                                                                                                                            let countDiv=document.createElement("div");
                                                                                                                                divs.appendChild(countDiv);
                                                                                                                                countDiv.innerText=`limited stock :${z.rating.count}`
                                                                                                                                countDiv.style.cssText=`width:150px;height:30px;background-color: rgb(139, 82, 16);color:#fff;font-size:14px;padding:5px 17px;border-radius:20px 20px ;align-content:ceter;position:relative;bottom:40px;right:10px`;
                                                                                                                            
                                                                                                                            let ratingDiv=document.createElement("div");
                                                                                                                                divs.appendChild(ratingDiv);
                                                                                                                                ratingDiv.innerText=`⭐ ${z.rating.rate}`
                                                                                                                                ratingDiv.style.cssText=`width:100px;height:30px;background-color: green;color:#fff;font-size:16px;padding:5px 17px;border-radius:20px;align-content:ceter;position:relative;bottom:70px;left:160px`; 
                                                                                                                                
                                                                                                                                let priceDiv=document.createElement("div");
                                                                                                                                divs.appendChild(priceDiv);
                                                                                                                                priceDiv.innerText=`Price : ₹ ${z.price}/-`
                                                                                                                                priceDiv.style.cssText=`width:190px;height:35px;background-color:violet;padding:5px 10px;color:#fff;font-size:20px;text-align:center;border-radius:20px;position:relative;left:35px;bottom:40px`;
                                                                                                                            }))
                                                                                                                                
// // //men div ----------------->
let mendiv=document.getElementById("menDiv");
document.body.appendChild(mendiv)
mendiv.style.cssText=`width:100%;height:100vh;display:flex;flex-wrap: wrap;background:url("https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg") center/cover no-repeat fixed  `


let url3=fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>x.filter(y=>y.category=="men's clothing").map(z=>{
                                                                                                                        let divs=document.createElement("div");
                                                                                                                            mendiv.appendChild(divs);
                                                                                                                            divs.setAttribute("class","woDiv");
                                                                                                                            divs.style.cssText=`background-color:purple;width:300px;height:600px;margin:10px 30px;padding:10px;border:5px solid #4a0d5bf4;border-radius:20px;overflow: hidden;`;

                                                                                                                        let imgDiv=document.createElement("img");
                                                                                                                            divs.appendChild(imgDiv);
                                                                                                                            imgDiv.setAttribute("src",z.image); 
                                                                                                                            imgDiv.setAttribute("class","woDivImg");
                                                                                                                        
                                                                                                                            
                                                                                                                        let title=document.createElement("h3");
                                                                                                                            divs.appendChild(title);
                                                                                                                            title.innerHTML=`${z.title}`;
                                                                                                                            title.style.cssText=`width:270px;height:100px;color:#fff;text-align:center;margin-bottom:px;font-size:18px;`;

                                                                                                                        let des=document.createElement("p");
                                                                                                                            divs.appendChild(des);
                                                                                                                            des.innerHTML=`${z.description}`;
                                                                                                                            des.style.cssText=`width:280px;color:#fff;font-size:10px;position:relative;bottom:50px`;

                                                                                                                        let countDiv=document.createElement("div");
                                                                                                                            divs.appendChild(countDiv);
                                                                                                                            countDiv.innerText=`limited stock :${z.rating.count}`
                                                                                                                            countDiv.style.cssText=`width:150px;height:30px;background-color: rgb(139, 82, 16);color:#fff;font-size:14px;padding:5px 17px;border-radius:20px 20px ;align-content:ceter;position:relative;bottom:40px;right:10px`;

                                                                                                                        let ratingDiv=document.createElement("div");
                                                                                                                            divs.appendChild(ratingDiv);
                                                                                                                            ratingDiv.innerText=`⭐ ${z.rating.rate}`
                                                                                                                            ratingDiv.style.cssText=`width:100px;height:30px;background-color: green;color:#fff;font-size:16px;padding:5px 17px;border-radius:20px;align-content:ceter;position:relative;bottom:70px;left:160px`; 
                                                                                                                            
                                                                                                                            let priceDiv=document.createElement("div");
                                                                                                                            divs.appendChild(priceDiv);
                                                                                                                            priceDiv.innerText=`Price : ₹ ${z.price}/-`
                                                                                                                            priceDiv.style.cssText=`width:190px;height:35px;background-color:violet;padding:5px 10px;color:#fff;font-size:20px;text-align:center;border-radius:20px;position:relative;left:35px;bottom:40px`;

                                                                                                                           })  )