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


let interestCalculator = (function (principle) {
    this.principle = principle;   
    this.rate =  null;
    this.years = null;    

    return{    
        
    setRate: function(x){
        x = this.rate;
    },
    setYears: function (x){
        x = this.years;
    },
    calculate: function (){
        console.log(this.principle + this.rate*this.years*this.principle);
    }
};
})();

let example = interestCalculator(1000);
example.setRate(0.1);
example.setYears(5);
example.calculate();




