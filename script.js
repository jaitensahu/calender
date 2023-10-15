let new_Date=new Date();
let arrayOfDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let arrayOfMonth=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
document.querySelector(".month").innerText=arrayOfMonth[new_Date.getMonth()];
document.querySelector(".day").innerText=arrayOfDay[new_Date.getDay()];
document.querySelector(".date").innerText=new_Date.getDate();
document.querySelector(".year").innerText=new_Date.getFullYear();
document.querySelector(".hour").innerText=new_Date.getHours();
document.querySelector(".minute").innerText=new_Date.getMinutes();
document.querySelector(".second").innerText=new_Date.getSeconds();;
// let i=1;
// while(i<=6){
// settimeout(()=>{
//     ti.innerText=new_Date.getSeconds();
// },1000)
// i++;
// }
    
// }


// console.log(new_Date);