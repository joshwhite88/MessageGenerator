const knockKnockJokes = [ ['Owls', 'They sure do!'], ['Adorable', "A-doorbell doesn't work, that's why I knocked!"],
['Daisy', 'Dey see me rollin, dey hatin...'], ['Kenya', 'Kenya open the door?'], ['Lettuce', 'Lettuce in!']];

let jokeIndex = Math.floor(Math.random() * 5);

console.log('Knock knock.');
console.log("Who's there?");
console.log(knockKnockJokes[jokeIndex][0]);
console.log(knockKnockJokes[jokeIndex][0] + ' who?');
console.log(knockKnockJokes[jokeIndex][1]);