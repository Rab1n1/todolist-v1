const express = require("express");
const bodyparser = require("body-parser");

const app = express();

var today = new Date();
var currentDay = today.getDay();
var day = "";

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

    
    // if (currentDay == 0 || currentDay == 1 || currentDay ==  2 || currentDay == 3 || currentDay == 4) {
    //     day = "Weekday";
    //     res.render('list', {KindOfDay: day});
    // } 
    // else {
    //     day = "Weekend";
    //     res.render('list', {KindOfDay: day});
    // }
    
    switch (currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("couldn't find an existing day");
            break;
    }
    console.log(day);

    res.render('list', {KindOfDay: day});    
});

app.listen(3000, function() {
    console.log("Server is up !");
});