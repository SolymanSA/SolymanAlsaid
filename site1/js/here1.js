



var cCounter = 0;

function CButton() { 
cCounter++;
changeById("counter", cCounter);
}

/* --- lable for loops implementation ---
Loop1: // Label
for(var i = 0 ; i < 5 ; i++) { 

    Loop2:
    for(var x = 0 ; x < 5 ; x++) { 

        if(x === 3) {
            break Loop1;
        }

        cl("here " + i +" => " + x)
    }
}
*/

/* --- Date implementation ---
var s = "Ahmed Ali Khaled";

var st = s.replace(/A/gi,"#"); // Regular expression 

cl(st);
*/

/*
var todayDate = new Date(),
    year = todayDate.getFullYear(), // get the current year 
    day = todayDate.getDate(),  // day in a month 
    hour = todayDate.getHours(), // get the current hour 
    minutes = todayDate.getMinutes(), // get the current minute 
    seconds = todayDate.getSeconds(), // get the current second 
    millisecond = todayDate.getMilliseconds(), // get the current millisecond
    diffTime = todayDate.getTime(); // get the number of millisecond from 1970
cl(todayDate);
cl(day);
cl(year);
cl(hour);
cl(minutes);
cl(seconds);
cl(millisecond);
cl(diffTime);
*/











