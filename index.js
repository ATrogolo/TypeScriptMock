"use strict";
// TypeScript usage mock
const log = console.log;
const rootElement = document.querySelector('#test-results');
let output;
function showOutput(text) {
    rootElement.innerHTML += `<div>${text}</div>`;
}
// Array of numbers
var arr = [1, 2, 3];
// Functions with typed argument
function fnc_test(n) {
    if (n > 10) {
        log("It's greater than 10");
    }
    else {
        log("Tiny number");
    }
    return "Number is: " + n;
}
output = fnc_test(40);
showOutput(output);
function car_test(myCar) {
    log(`Car: ${myCar.producer}, ${myCar.owner}, ${myCar.purchaseYear}, ${myCar.tollPayed}`);
}
output = car_test({ producer: 'Fiat', owner: 'Andrea', purchaseYear: 2018, tollPayed: false });
showOutput(output);
// ENUM 
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["REDIRECT"] = 300] = "REDIRECT";
    HttpStatus[HttpStatus["CLIENT_ERR"] = 400] = "CLIENT_ERR";
    HttpStatus[HttpStatus["SERVER_ERR"] = 500] = "SERVER_ERR";
})(HttpStatus || (HttpStatus = {}));
let asd = HttpStatus.CLIENT_ERR;
function sayMyName(p) {
    log('My name is: ' + p.firstname);
}
class Person {
    constructor(firstname, lastname) {
        this.asd = 123;
        this.aa = true;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayMyName() {
        return "Name: " + this.firstname;
    }
    whoAmI() {
        return `Name: ${this.firstname} - Surname: ${this.lastname}`;
    }
}
Person.isHuman = true;
const mario = new Person("Mario", "Rossi");
output = mario.whoAmI();
showOutput(output);
log("IsHuman: " + Person.isHuman);
function switchMe(number) {
    let message;
    switch (number) {
        case (0):
            message = "It's 0";
            log(message);
            return message;
        case (1):
            message = "It's 1";
            log(message);
            return message;
        default:
            message = "Different number";
            log(message);
            return message;
    }
}
showOutput(switchMe(0));
showOutput(switchMe(1));
showOutput(switchMe(2));
// Handling of "rest" parameter
function restParams(x = 0, ...rest) {
    log(x);
    rest.forEach((item, index) => {
        log("Index " + index + " -> Value: " + item);
    });
}
restParams(1, 2, 3, 4, 5, 6, 7);
//# sourceMappingURL=index.js.map