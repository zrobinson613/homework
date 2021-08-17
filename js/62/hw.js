'use strict';

let dayOfWeekModule = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

    return {
        getDayName: function (a) {
            return days[a - 1];
        },
        getDayNameArrow: a => days[a - 1],

        getDayNumber: function (m) {
            return days.findIndex(function (b) {
                return m.toLowerCase === b.toLowerCase;
            }) + 1;
        },

        getDayNumber2: function (b) {
            return days.findIndex(b) + 1;
        },


        getDayNumberArrow: b => days.findIndex(m => m.toLowerCase === b.toLowerCase) + 1
    };
})();

console.log(dayOfWeekModule.getDayNumberArrow('sunday'));

console.log(dayOfWeekModule.getDayNumber('Monday'));
console.log(dayOfWeekModule.getDayNameArrow(2));


let interestCalculator = (function (p) {
    let principle = p;
    let rate;
    let years;

    return {

        setRate: function (x) {
            rate = x;
        },
        setYears: function (x) {
           years = x;
        },
        calculate: function () {
           console.log(principle + rate * years * principle);
        }
    };
})();

let example = interestCalculator(1000);
example.setRate(0.1);
example.setYears(5);
example.calculate();

// --------- from class ----------

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function daysUtil() {
    function getDayIndex(day) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
                return i + 1;
            }
        }
    }

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDayIndex: getDayIndex,
        getDay: getDay
    };
}

const du = daysUtil();


//console.log(getDayIndex('Monday'));
//console.log(getDay(2));

console.log(du.getDayIndex('Monday'));
console.log(du.getDay(2));

const du2 = (function daysUtil() {
    function getDayIndex(day) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
                return i + 1;
            }
        }
    }

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDayIndex: getDayIndex,
        getDay: getDay
    };
})();

const du3 = (function daysUtil() {
    function getDayIndex(day) {
        // for (let i = 0; i < days.length; i++) {
        //     if (days[i] === day) {
        //         return i + 1;
        //     }
        // }
        // const dow = dayOfWeek.toLowerCase();
        return days.findIndex(function (dayOfWeek){
            return dayOfWeek.toLowerCase() === day.toLowerCase();
        }) +1;

    }

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDayIndex: getDayIndex,
        getDay: getDay
    };
})();


/////////////////////

const calc =(function (){
let years;
let rate;
function setYears(y){
    years = y;
}

function setRate(r){
    rate =r;
}

function calculate(principle){
    let p = principle;
    for (let i =0; i< years; i++){
        p += p*rate;
    }
    return p - principle;
}
return{
    setYears: setYears,
    setRate: setRate,
    calculate: calculate
};
})();

calc.setYears(1);
calc.setRate(0.1);
calc.calculate(100);

