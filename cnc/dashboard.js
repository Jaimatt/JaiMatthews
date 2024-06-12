var photos = ["assets/tyrell.png", "assets/jai.jpg", "assets/mark.png", "assets/jett.png"]
var quotes = 
[`“Be like No Kum-Sok, betray the communists.”<br>-Tyrell Carli`, 
`“We all like to let Tyrell pretend he’s in charge. In actuality he’s not – I am.”<br>-Jai Matthews`, 
`“…And that’s why I shop at woollies!”<br>-Mark Gurney`, 
`“Go away. Stop touching me.”<br>-Jett De Salvo`]
var locations = ["team.html#tyrell", "team.html#jai", "team.html#mark", "team.html#jett"]

var date = new Date().getDate();
potd = (date % 4);

document.getElementById("headshot").src=photos[potd];
document.getElementById("quote").innerHTML=quotes[potd];
document.getElementById("readmore").href=locations[potd];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date().getDay();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();


document.getElementById("timeanddate").innerHTML=(days[day] + ', ' + date + ' ' + months[month-1] + ' ' + year + ' | ' + date + '/' + month + '/' + year)