const userChoseOptions = 'level'; 

let person = {
    name: 'Hieu',
    'last name': 'Trung',
    [userChoseOptions]: '....', //pass key 'level' into person
    age: 35,
    hobbies: ['Sport', 'Cooking'],
    greet: function () {
        alert('Hi Javascript');
    }
}

//add properties
person.isAdmin = true;

//delete properties
delete person.age;

const keyName = 'last name';
console.log(person[keyName]);

console.log(person);
console.log(person['last name']);

// person.greet();