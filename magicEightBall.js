const prompt = require('prompt-sync')();
let userName = prompt("Enter your name: ");

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = prompt("Ask the magic eight ball a yes or no question: ");

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);


let eightBall = '';

switch(randomNumber){
case 0:
eightball = 'It is certain';
break;
case 1:
eightball = 'It is decidedly so';
break;
case 2:
eightball = 'Reply hazy try again';
break;
case 3:
eightball = 'Cannot predict now';
break;
case 4:
eightball = 'Do not count on it';
break;
case 5:
eightball = 'My sources say no';
break;
case 6:
eightball = 'Outlook not so good';
break;
case 7:
eightball = 'Signs point to yes';
break;
}

console.log(`The magic eightball says ---  ${eightball}`);
