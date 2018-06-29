
// TypeScript usage mock

const log = console.log;
const rootElement: any = document.querySelector('#test-results')
let output: any;

function showOutput(text: string) {
  rootElement.innerHTML += `<div>${text}</div>`;
}

// Array of numbers
var arr: number[] = [1, 2, 3]

// Functions with typed argument
function fnc_test(n: number): string {
  if (n > 10) {
    log("It's greater than 10");
  } else {
    log("Tiny number");
  }
  return "Number is: " + n;
}

output = fnc_test(40);
showOutput(output);


// Object "Car" definition
interface Car {
  producer: string,
  owner: string,
  purchaseYear: number,
  tollPayed: boolean
}

function car_test(myCar: Car): void {
  log(`Car: ${myCar.producer}, ${myCar.owner}, ${myCar.purchaseYear}, ${myCar.tollPayed}`);
}

output = car_test({ producer: 'Fiat', owner: 'Andrea', purchaseYear: 2018, tollPayed: false });
showOutput(output);


// ENUM 
enum HttpStatus { OK = 200, REDIRECT = 300, CLIENT_ERR = 400, SERVER_ERR = 500 }
let asd: HttpStatus = HttpStatus.CLIENT_ERR


interface IPerson {
  firstname: string,
  lastname: string,
  age: number,
  isMarried?: boolean // optional parameter
}

function sayMyName(p: IPerson) {
  log('My name is: ' + p.firstname);
}

class Person {
  static isHuman: boolean = true
  private firstname: string  // private field - accessible only from get/set
  lastname: string

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  private sayMyName(): string {
    return "Name: " + this.firstname;
  }

  private asd: number = 123;
  private aa: boolean = true;

  whoAmI(): string {
    return `Name: ${this.firstname} - Surname: ${this.lastname}`;
  }
}

const mario = new Person("Mario", "Rossi")
output = mario.whoAmI();
showOutput(output);

log("IsHuman: " + Person.isHuman);

function switchMe(number: number) {
  let message
  switch (number) {
    case (0):
      message = "It's 0"
      log(message);
      return message;
    case (1):
      message = "It's 1"
      log(message);
      return message;
    default:
      message = "Different number"
      log(message);
      return message;
  }
}

showOutput(switchMe(0))
showOutput(switchMe(1))
showOutput(switchMe(2))

// Handling of "rest" parameter
function restParams(x: number = 0, ...rest: number[]) {
  log(x)
  rest.forEach((item, index) => {
    log("Index " + index + " -> Value: " + item)
  })
}

restParams(1, 2, 3, 4, 5, 6, 7);
