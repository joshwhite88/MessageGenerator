function generateRandomNumber() {
    return Math.floor(Math.random() * 5);
}

const questions = ['Owls', 'Adorable', 'Daisy', 'Kenya', 'Lettuce'];
const answers = [
    'They sure do!', 
    'A-doorbell doesn\'t work, that\'s why I knocked!', 
    'Dey see me rollin, dey hatin...', 
    'Kenya open the door?', 
    'Lettuce in!'];

let joke = generateRandomNumber();

console.log('Knock knock');
console.log('Who\'s there?');
console.log(questions[joke]);
console.log(`${questions[joke]} who?`);
console.log(answers[joke]);
