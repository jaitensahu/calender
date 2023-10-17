let new_Date=new Date();
let arrayOfDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let arrayOfMonth=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
let seconds=document.querySelector(".second")

function secondsUpdate(){
    document.querySelector(".month").innerText=arrayOfMonth[new Date().getMonth()];
    document.querySelector(".day").innerText=arrayOfDay[new Date().getDay()];
    document.querySelector(".date").innerText=new Date().getDate();
    document.querySelector(".year").innerText=new Date().getFullYear();
    document.querySelector(".hour").innerText=new Date().getHours();
    document.querySelector(".minute").innerText=new Date().getMinutes();
}

setInterval(() => {
    seconds.innerText=new Date().getSeconds();
    secondsUpdate();
}, 1000);
