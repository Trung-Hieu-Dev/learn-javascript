// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

//constructor function
function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

//add method to Person
Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};


const p = new Person();
// p.greet();
// console.log(p.toString());
console.log(p);
// console.dir(Person); //check constructor of Person
// console.log(Person);
// console.log(p.__proto__);
p.printAge();
// console.log(p.__proto__ === Person.prototype);
