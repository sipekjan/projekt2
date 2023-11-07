/*
function fce(){
    console.log("Ahoj svete");
}


const fce2 = () => {
    console.log("Ahoj svete");
}
//             item - parametr
function konsel (item) {
    console.log (`prinesl jsem ${item}`)
}

const konsel2 = (item, item2) =>{
    console.log (`prinesl jsem ${item} a ${item2}`)
}
//      argument
konsel("piti");
konsel("urban");
konsel2("zidle", "bobika");
konsel2("jidlo", "piti");



function sum(a, b) {
    console.log(a + b);
}

let resultOne = sum (6, 4);
let resultTwo = sum (10, 4)
sum(6, 4);



let numberOne = 5;
let numberTwo = 8;

let numberThree = 6;
let numberFour = 7;

function sumF(a, b){
    return a +b;
}

const sum = (a ,b) => a+b;

let resultOne = sum(numberOne, numberTwo);
let resultTwo = sum(numberThree, numberFour);
console.log(sumF(resultOne, resultTwo));

let name ="Ondra";
let age = 18;
const getSentence = (person, age) => `Tvoje jméno je ${person} a je ti ${age} let`;


let sentence = getSentence(name, age);
console.log(sentence);
*/
const cube = document.getElementById("cube");
const cube2 = document.getElementById("cube2");
const time = document.getElementById("time");
let gameInterval;
cube.onclick = () => {
  const audio = new Audio("./res/audio/music.mp3");
  audio.play();
  cube.style.display = "none"; //none- pryc  block - obejevi se
  changeColor(cube, 2, 2, 232);
  setNumber(cube2, 0);
  setCookieClicker(cube2);
  moveElement(cube2, 300, 320);
  startGameInterval();
};
const changeColor = (element, red, green, blue) => {
  element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};


const setNumber = (element, number) => {
  element.innerHTML = number;
};

let timeStart = 0;
const setCookieClicker = (element) => {
  element.onclick = () => {
    element.innerText++;
    moveElement(cube2, getRandomNumber(0, window.innerWidth), getRandomNumber(0, window.innerHeight));
    let customSize = getRandomNumber(20, 100);
    setSize(element, customSize, customSize);
    if (timeStart == 0) {
      timeStart = performance.now();
    } else {
      let timeEnd = performance.now();
      let result = timeEnd - timeStart;
      time.innerHTML = `${result}ms`;
      timeStart = performance.now();
    }
  };
};
const moveElement = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const setSize = (element, width, height) => {
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
};
const startGameInterval = () =>{
    clearInterval(gameInterval);
        gameInterval = setInterval(() => {
        changeColor(cube2, getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255));
        moveElement(cube2, getRandomNumber(0, window.innerWidth), getRandomNumber(0, window.innerHeight));
        let customuSize = getRandomNumber(45, 110);
        setSize(cube2, customuSize, customuSize);
      }, 1000);
      
}

