// Creating an Object
const person = {
    name: 'Baron',
    age: 20,
    great() {
   console.log('HI, I am '+ this.name );
    }
 };
 // calling object .
 console.log(person.age);
 console.log(person);
 person.great();