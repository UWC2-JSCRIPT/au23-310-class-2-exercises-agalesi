// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
//Task 1 and 2 Object representing myself with output
const me = { 
  
 firstName: 'Alex',
 lastName:'Galesi',
'favorite food': 'crabmeat',
  bestFriend: { 
    friendFirstName:'Paul', 
    friendLastName: 'Clark',  
    'favorite food friend': 'Shrimp'},
};

// 2. console.log best friend's firstName and your favorite food
    console.log(`My best friend is ${me.bestFriend.friendFirstName} and my favorite food is ${me['favorite food']}.`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
//Task 3,4, and 5 Tic Tac Toe game and update first element 3rd value, output
const ticTacToe = [['-','0','-'], ['-','x','0'],['x','-','x']];



// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] ='0'; //index 0 for first element and index 2 for third element within

// 5. Log the grid to the console.

console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
//Task 6 email validation with Regex and testing 
let emailVerify = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/; //Email Address Validation Regex plus 
//no whitespace \s

let myEmail = 'agalesi@uw.edu extra text to delete';

let validateThis = myEmail.match(emailVerify);

console.log("This following email is free of unnecessary text: " + validateThis[0]); //outputs email only, deletes the rest of extra text after a space

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const stringDate = '1/21/2019';
const dateFormat = new Date(stringDate);
console.log(dateFormat); 

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
//Task 8 new Date instance 7 days after 1/21/2019 as dueDate
function addDays(dateFormat, days) {
  dateFormat.setDate(dateFormat.getDate() + days);
  return dateFormat;
}

const dueDate = addDays(dateFormat,7);
console.log(dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let specificFormat = dueDate.getFullYear() +'-' +  (dueDate.getMonth()+1) + '-' + dueDate.getDate();

// 10. log this value using console.log
// console.log(specificFormat);

console.log(`'<time datetime="${specificFormat}">${months[0]} 28, 2019</time>'`)
