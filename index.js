// Write your code here!
const main = document.querySelector('main');
if (main) {
  main.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Ernest Munyoki is the champion';

document.body.append(newHeader);
