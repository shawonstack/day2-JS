// let a = 40;
// a = 50;
// let b = a;

// console.log(a);
// console.log(b);
let person = {
  name: 'saidur',
};
let newPerson = person;
person.name = 'amin';
// console.log(person);
// console.log(newPerson);

// includes
let sentence = 'i love javascript';
let resultSen = sentence.includes('javascript');

//slice

let country = 'bangladesh';
let rescount = country.slice(0, 5);

// Length
let stirng = 'he is  a very good boy';

// split
let name = 'apple, banana, mango';
let result = name.split(',');
// console.log(result);
let a = 'I am learning JS';
let result2 = a.replace('js', 'javascript');
// console.log(result2);

let email = '   BLOOD@GMAIL.COM   ';
let emailGapCut = email.trim();
let emailLower = emailGapCut.toLocaleLowerCase();
// console.log(emailLower);

// full name
let firstName = 'Blood';
let lastName = 'Khan';
let nameResult = firstName.concat(' ', lastName);
// console.log(nameResult);

// find username
let email2 = 'blood123@gmail.com';

let username2 = email2.split('@')[0];

// console.log(username2);

//ck something
let file = 'photo.png';
let filecheck = file.includes('.png');
console.log(filecheck);
//first carrecter capital
let name4 = 'blood';
let result4 = name4.toUpperCase([0]);
console.log(result4);
