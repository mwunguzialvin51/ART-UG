let btn = document.querySelector('#close');

// the following code is responsible for removing the content
function hideMe(){
  let p = document.querySelector(".items");
   p.style.display = "none";
  
}

btn.addEventListener('click',()=>{
     hideMe();
     btn.style.background = "#8c0";
})

// the following code makes the content visible again
let show = document.querySelector("#show");

function appear(){
    let p = document.querySelector(".items");
    p.style.display = "block";
}

show.addEventListener("mouseenter",()=>{
     appear();
})

