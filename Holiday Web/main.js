let date = new Date();
let hour = date.getHours();
let greetings = document.querySelector('#greeting');
let value;


if(hour>=6 && hour<12)
{
    value = "Good Morning"+"<span>&#127774;</span>";
}
else if(hour >= 12 && hour<=18)
{
    value = "Good Afternoon"+"<span>&#127774;</span>";
}
else if(hour>=18 && hour<=20)
{
    value = "Good Evening"+"<span>&#127767;</span>";
}
else if(hour>20 && hour <=24)
{
    value = "Good Night"+"<span>&#127772;</span>";
}

greetings.innerHTML = value;
