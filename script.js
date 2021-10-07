const arrWeeks = 
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let d = new Date(); // Getting Current Date
let week = arrWeeks[d.getDay()] // Accessing Array 'arrWeeeks' Element
var weekNum = d.getDay(); 
document.getElementById('month').value = d.getMonth() + 1;
document.getElementById('date').value = d.getDate();
document.getElementById('year').value = d.getFullYear();
let field = document.getElementById('field').innerHTML = week; // Printing Array Element
var bg = document.getElementById('bg');

myCond();

function myCond() {
    if (weekNum == 0) {
        bg.style.backgroundImage = "url('Images/sunday.jpg')";
    } else if(weekNum == 1) {
        bg.style.backgroundImage = "url('Images/monday.jpg')";
    } else if(weekNum == 2) {
        bg.style.backgroundImage = "url('Images/tuesday.jpg')";
    } else if(weekNum == 3) {
        bg.style.backgroundImage = "url('Images/wednesday.jpg')";
    } else if(weekNum == 4) {
        bg.style.backgroundImage = "url('Images/thursday.jpg')";
    } else if(weekNum == 5) {
        bg.style.backgroundImage = "url('Images/friday.jpg')";
    } else if(weekNum == 6) {
        bg.style.backgroundImage = "url('Images/saturday.jpg')";
    }
}


function myFind() {
    let date = new Date();
    let mn = document.getElementById('month').value;
    let dt = document.getElementById('date').value;
    let yr = document.getElementById('year').value;
    date.setMonth(mn - 1);
    date.setDate(dt);
    date.setFullYear(yr);
    weekNum = date.getDay();
    document.getElementById('field').innerHTML = arrWeeks[date.getDay()];

    if(isNaN(mn) || isNaN(dt) || isNaN(yr)){
        document.getElementById('field').innerHTML = "Error";
        alert("Please try to input number only");
    } else if(Number(mn) > 12 || Number(mn) < 1 || Number(dt) > 31) {
        document.getElementById('field').innerHTML = "Error";
        alert("The invalid rage for Month are (1 - 12) and for Date are (1 - 31)");
    } else {
        myCond();
    }
    
}