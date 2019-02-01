/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/
var Person = function(firstAndLast) {

  // Complete the method below and implement the others similarly

  let fullName = firstAndLast;
  let names = fullName.split(' ');
  let firstName = names[0];
  let lastName = names[names.length - 1];

  this.getFirstName = function() {
    console.log(`The first name is ${JSON.stringify(firstName)}`);
    return firstName;
  };

  this.getLastName = function() {
    console.log(`The last name is ${JSON.stringify(lastName)}`);
    return lastName;
  };

  this.getFullName = function() {
    console.log(`The full name is ${JSON.stringify(fullName)}`);
    return fullName;
  };

  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + ' ' + lastName;
  };

  this.setLastName = function(last) {
    lastName = last;
    fullName = firstName + ' ' + last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    let newNames = fullName.split(' ');
    firstName = newNames[0];
    lastName = newNames[names.length - 1];
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
/**
 * Object.keys(bob).length should return 6.
 * bob instanceof Person should return true.
 * bob.firstName should return undefined.
 * bob.lastName should return undefined.
 * bob.getFirstName() should return "Bob".
 * bob.getLastName() should return "Ross".
 * bob.getFullName() should return "Bob Ross".
 * bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
 * bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
 * bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
 * bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
 * bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
 */