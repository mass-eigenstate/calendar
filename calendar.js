/* The default month to display is the current month */
const today = new Date();
const mtd = today.getMonth();
const ytd = today.getFullYear();
console.log(mtd,ytd);

if (document.readyState === 'loading') {  // Loading hasn't finished yet
    console.log("adding Listener");
    window.addEventListener('DOMContentLoaded', dispMonth(mtd,ytd) );
} else {  // `DOMContentLoaded` has already fired
    dispMonth(mtd,ytd);
}

function isLeapYear(year) {
	if (year%400 === 0) {
		return true;
	} else if (year%100 === 0) {
		return false;
	} else if (year%4 === 0) {
      	return true;
	} else {
      	return false;
	}

}

function dispMonth(mtd, ytd) {
    const mnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] 
    const dnames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    console.log(mnames[mtd]+" "+ytd);
    console.log(document.getElementById("monyr"))
    document.getElementById("monyr").innerHTML = mnames[mtd]+" "+ytd; 
    const firstOfMonth = new Date(ytd,mtd,1);
    var day_of_week = firstOfMonth.getDay();
    if (isLeapYear(ytd)) {
        dmonth[1] = 29;
    } else {
        dmonth[1] = 28; 
    }
    
    let weeks = ["w1","w2","w3","w4","w5"];
    let days = ["d0","d1","d2","d3","d4","d5","d6"];
    let dayCount = 1;
    for (var w of weeks) {
        if (w == "w1") { }
        for (var d of days) {
            var id = w+d;

        }
    }
    document.getElementById("w2d1").innerHTML = "10"

    return;
}

