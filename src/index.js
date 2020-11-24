
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let colorChangeByTime = '';

function colorGenerator() {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]

}

function onStart() {
    startBtn.setAttribute("disabled", "true");

    colorChangeByTime = setInterval(colorGenerator, 1000);
   
}

function onStop() {
    startBtn.removeAttribute("disabled", "true")

    clearInterval(colorChangeByTime);

}






    
   
    
    








 
   
  


