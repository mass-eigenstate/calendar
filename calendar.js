/* The default month to display is the current month */
const today = new Date();
const mtd = today.getMonth();
const ytd = today.getFullYear();
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

function dispMonth(mtd, ytd) {
    const mnames = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    const dnames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var id = "";
    console.log(mnames[mtd] + " " + ytd);
    console.log(document.getElementById("monyr"));
    document.getElementById("monyr").innerHTML = mnames[mtd] + " " + ytd;
    const firstOfMonth = new Date(ytd, mtd, 1);
    var day_of_week = firstOfMonth.getDay();

    if (isLeapYear(ytd)) {
        dmonth[1] = 29;
    } else {
        dmonth[1] = 28;
    }

    var dayCount = 1;
    var w = 0;
    for (var nd = 0; nd < 7; nd++) {
        id = "w" + w + "d" + nd;
        if (nd < day_of_week) {                       // Put blanks in until the day of the week that is the fist of the month
            document.getElementByID(id).innerhtml = "";
        } else {
            document.getElementByID(id).innerhtml = str(dayCount);
            dayCount++;
        }
    }

    for (w = 1; w < 5; w++) {
        for (var nd = 0; nd < 7; nd++) {
            id = "w" + w + "d" + nd;
            dayCount++;
            if (dayCount > dmonth[mtd]) {
                document.getElementByID(id).innerHTML = "";
            } else {
                document.getElementById(id).innerHTML = str(dayCount);
            }
        }
    }
    return;
}