let userName = prompt('enter your name');
document.querySelector('#username').innerHTML = userName;

function refresh()
{
    let date = new Date();
// let currentTime = ;
let foodTime = date.getHours();
console.log(foodTime);
document.querySelector('#time').innerHTML = date.toLocaleTimeString();
let food = document.querySelector('#typeFood');
}

setInterval(refresh,1000);

let date_2 = new Date();
let hour = date_2.getHours();
let foodType = document.querySelector('#typeFood');
let value;


if(hour>=6 && hour<12)
{
    value = "It's time to order your breakfast";
}
else if(hour >= 12 && hour<=18)
{
    value = "It's time to order your lunch";
}
else if(hour>=18 && hour<=20)
{
    value = "It's time to order your snacks";
}
else if(hour>20 && hour <=24)
{
    value = "It's time to order your dinner";
}

foodType.innerHTML = value;