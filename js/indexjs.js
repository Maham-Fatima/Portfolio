let date;
let hour;
let min;
let sec;
let day;
let month;
setInterval(function () {
    let clock = new Date();
    hour = clock.getHours();
    min = clock.getMinutes();
    sec = clock.getSeconds();
    date = clock.getDay();

    // Convert dayOfWeek to the corresponding day name
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[date];
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "april", "Jun", "Jul", "aug", "sep", "Oct", "Nov", "Dec"];
    const month = monthArray[clock.getMonth()];
    if (hour >= 19 && hour <= 23 || hour >= 0 && hour <= 7) {
        document.querySelector(".clock").style.backgroundImage = "URL(pics/night.jpg)";
        document.querySelector(".clock").style.color = "white";

    } else {
        document.querySelector(".clock").style.backgroundImage = "URL(pics/day.jpg)";
        document.querySelector(".clock").style.color = "black";
    }
    document.querySelector(".clock").style.backgroundSize = "40vw 60vh";

    let formatted = day + "  " + hour + ":" + min + ":" + sec + " " + month + " " + clock.getFullYear();
    document.querySelector(".display").innerHTML = formatted;
}, 1000);

