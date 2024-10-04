// task:1 on & off


let on=document.getElementById("on")
    on.addEventListener("click",()=>{
        let image=document.getElementById("onimg");
        image.src="https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_640.png"
    })
let off=document.getElementById("off")
    off.addEventListener("click",()=>{
        let image=document.getElementById("onimg");
        image.src="https://cdn.pixabay.com/photo/2014/04/02/17/01/bulb-307687_1280.png "
    })


// https://cdn.pixabay.com/photo/2014/04/02/17/01/bulb-307687_1280.png   off
// https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_640.png   on


// task:2
let on1=document.getElementById("towgill")
let count=0
    on1.addEventListener("click",()=>{
    let image=document.getElementById("onimg");
   
    
   
    
    //if condition lo ----> image.src.includes("bulb-307687_1280.png")
    if(count==0){
    image.src="https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_640.png";
    count=count+1;
    }
    else{
    image.src="https://cdn.pixabay.com/photo/2014/04/02/17/01/bulb-307687_1280.png ";
    count=0
    }
})

// task:3
let on2=document.getElementById("onimg")
let count1=0;
    on2.addEventListener("click",()=>{
    let image=document.getElementById("onimg");

    
    if(count1==0){
    image.src="https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_640.png";
    count1=count1+1;
    }
    else{
    image.src="https://cdn.pixabay.com/photo/2014/04/02/17/01/bulb-307687_1280.png ";
    count1=0;
    }
})


