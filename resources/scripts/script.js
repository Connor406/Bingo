// Bingo! 

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,
24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

let title = document.getElementById('title');
let mainLetter = document.getElementById('main-letter');
let secondLetter = document.getElementById('second-letter');
let thirdLetter = document.getElementById('third-letter');
let holdOne = 'B';
let holdTwo;
let holder;
let letter;

const bigLetters = (hold, hold1, hold2) => {
  if (hold === hold1 && hold1 === hold2){
    secondLetter.style.fontSize = "5rem";
    thirdLetter.style.fontSize = '5rem';
    secondLetter.style.opacity = '1';
    thirdLetter.style.opacity = '1';
    title.innerHTML = "Three in a row!"
  } else if (hold === 'I' && hold1 === 'B' && hold2 ==='G'){
    secondLetter.style.fontSize = "5rem";
    thirdLetter.style.fontSize = '5rem';
    secondLetter.style.opacity = '1';
    thirdLetter.style.opacity = '1';
    title.innerHTML = 'Tom Hanks';
  } else {
    secondLetter.style.fontSize = '3rem';
    secondLetter.style.opacity = '.6';
    thirdLetter.style.fontSize = '2rem';
    thirdLetter.style.opacity = '.4';
    title.innerHTML = 'Bingo'
  }
}


const drawNumber = () => {
  let pickedNum = nums.splice(Math.floor(Math.random()* nums.length),1);

  if (pickedNum <= 15){
    letter = 'B';

  } else if (pickedNum >= 16 && pickedNum <= 30){
    letter = 'I';

  } else if (pickedNum >= 31 && pickedNum <= 45){
    letter = 'N';

  } else if (pickedNum >= 46 && pickedNum <= 60){
    letter = 'G';

  } else if (pickedNum >= 61 && pickedNum <= 75){
    letter = 'O';

  } else {
    letter = 'Game Over'
  }
  mainLetter.innerHTML = (letter + ' ' + pickedNum);

  //Changes # drawn from first position, to second, to third
  holder = holdOne;
  holdOne = letter;
  holdTwo = secondLetter.innerHTML;
  thirdLetter.innerHTML = holdTwo;
  secondLetter.innerHTML = holder;
  
  // Changes table colors when number is drawn
  let numbers = document.getElementById(pickedNum.toString());
  numbers.style.color = '#79fffe';
  numbers.style.textShadow = '-3px 5px 18px rgb(103, 202, 248)'
  bigLetters(holder, holdOne, holdTwo);
};
  
document.addEventListener('click',drawNumber);
document.addEventListener('keyup',drawNumber);