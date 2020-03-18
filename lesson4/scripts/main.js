// var d = new Date();
// document.getElementById("todayDate").innerHTML = d.toDateString();


/* Wednesday, 10 May, 2020*/
/* declare date variable*/

let todayDate= new Date();
let fullDate;

/* day of week*/

let daysOfWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
];

let dayOfWeek = todayDate.getDay();

fullDate = daysOfWeek[dayOfWeek];

/*day of month*/

let dayOfMonth = todayDate.getDate();
fullDate += ', ' + dayOfMonth;

/*month*/

let months = [
    'JANUARY',
    'FEBRAURY',
    "MARCH",
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUS',
    'SEPTEMBER',
    "OCTOBER",
    'NOVEMBER',
    'DECEMBER'
]

fullDate += ' ' + months[todayDate.getMonth()];


/* get year*/
let year = todayDate.getFullYear();
fullDate += ' ' + year;

/* full date*/
document.querySelector('#todayDate').textContent = fullDate;


function dropDown() {

    var x = document.getElementById("menuList");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}