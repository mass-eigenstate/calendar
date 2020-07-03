/* The default month to display is the current month */
const today = new Date();
var mtd = today.getMonth();
var ytd = today.getFullYear();
console.log(mtd, ytd);

if (document.readyState === 'loading') {  // Loading hasn't finished yet
    console.log("adding Listener");
    window.addEventListener('DOMContentLoaded', dispMonth(mtd, ytd));
} else {                                  // `DOMContentLoaded` has already fired
    dispMonth(mtd, ytd);
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

function prevMonth() {
    if (mtd > 0) {              // If not January just subtract a month
        mtd--;
    } else {                    // For Juary go back to previous December
        mtd = 11;
        ytd--;
    }
    dispMonth(mtd, ytd);
    return;
}

function nextMonth() {
    if (mtd == 11) {              // If not January just subtract a month
        mtd = 0;
        ytd++;
    } else {                    // For Juary go back to previous December
        mtd++;
    }
    dispMonth(mtd, ytd);
    return;
}

function dispMonth(mtd, ytd) {
    const mnames = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    const dnames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var tdid = "";
    console.log(mnames[mtd] + " " + ytd);
    console.log(document.getElementById("monyr"));
    document.getElementById("monyr").innerHTML = mnames[mtd] + " " + ytd;
    const firstOfMonth = new Date(ytd, mtd, 1);
    var day_of_week = firstOfMonth.getDay();
    
    // By default hide the last week
    var w = 5;
    for (var nd = 0; nd < 7; nd++) {
        tdid = "w" + w + "d" + nd;
        document.getElementById(tdid).style.display="none";                    // Make it hidden
    }


    if (isLeapYear(ytd)) {
        dmonth[1] = 29;
    } else {
        dmonth[1] = 28;
    }

    var dayCount = 1;
    w = 0;
    for (var nd = 0; nd < 7; nd++) {
        tdid = "w" + w + "d" + nd;
        if (nd < day_of_week) {                       // Put blanks in until the day of the week that is the fist of the month
            document.getElementById(tdid).innerHTML = " ";
        } else {
            document.getElementById(tdid).innerHTML = dayCount.toString();
            dayCount++;
        }
    }

    for (w = 1; w < 5; w++) {
        for (nd = 0; nd < 7; nd++) {
            tdid = "w" + w + "d" + nd;
            if (dayCount > dmonth[mtd]) {           // Put blanks after the day of the month
                document.getElementById(tdid).innerHTML = " ";
            } else {
                document.getElementById(tdid).innerHTML = dayCount.toString();
                dayCount++;
            }
        }
    }
    // sometimes you need a sixth row. It is normally hidden. 
    if (dayCount <= dmonth[mtd]) {
        w = 5;
        for (var nd = 0; nd < 7; nd++) {
            tdid = "w" + w + "d" + nd;
            document.getElementById(tdid).style.display ="inline-table";                // Make it visible      
            document.getElementById(tdid).style.minWidth = "8em";                
            if (dayCount <= dmonth[mtd]) {
                document.getElementById(tdid).innerHTML = dayCount.toString();
                dayCount++;
            } else {
                document.getElementById(tdid).innerHTML = " ";
            }
        }
    }
    return;
}