var myArr = [1.22, 6.75, 35.89, 0.45, 105.03];
var myNewArr = [];

// FUNCTION THAT ROUNDS ALL NUMBERS IN AN ARRAY AND RETURNS THEM TO A NEW ARRAY
function roundNumInArr(array, newArray) {
    for (var i = 0; i < array.length; i++) {
        newArray.push(Math.round(array[i]));
    }
};

roundNumInArr(myArr, myNewArr);

// FUNCTION THAT CREATES A RANDOM NUMBER (INCLUSIVE OF BOTH INPUTS)
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CREATE 10 RANDOM NUMBERS AND PUSH THEM TO numArr ARRAY
var numArr = [];
for (var i = 0; i < 10; i++) {
    numArr.push(randomNum(1, 100));
};

// FUNCTION THAT STORES THE CURRENT WHOLE DATE, HOUR, MINUTE AND SECOND IN VARIABLES
function currentDate() {
    var now = new Date();
    var year = now.getYear().toString().slice(-2);
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var clock = formatNum(hour) + ":" + formatNum(minute) + ":" + formatNum(second);
    var date = formatNum(day) + "/" + formatNum(month) + "/" + year;
    document.getElementsByTagName('p')[0].innerText = (clock + " " + date);
    setTimeout(function() {
        currentDate();
    }, 1000);
};

// FUNCTION THAT FORMATS NUMBER TO ALWAYS SHOW WITH 2 PLACES (eg. "2" => "02")
function formatNum(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time;
    }
};

currentDate();
